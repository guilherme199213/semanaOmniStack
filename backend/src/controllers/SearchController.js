const Dev = require('../models/Dev');
const parseStringAsArray = require('../util/parseStringAsArray')

module.exports = {

    async index(request, response) {
        const { longitude, latitude, techs } = request.query;
        //Buscar devs num raio 10Km
        //Filtrar por tecnologia
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.findOne({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        console.log(techsArray);

        return response.json({ devs });
    }
}
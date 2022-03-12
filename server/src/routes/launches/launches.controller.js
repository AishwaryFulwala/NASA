const launchModel = require('../../models/launches.model')

function getAlllaunches (req, res) {
    return res.status(200).json(launchModel.getAlllaunches());
}

function addlaunch(req, res) {
    const launch = req.body

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Invalid Launch Property.'
        })
    }

    launch.launchDate = new Date(launch.launchDate)

    launchModel.addlaunches(launch)
    return res.status(200).json(launch)
}

function abortlaunch(req, res) {
    const id = Number(req.params.id)

    if(!launchModel.existslaunch(id)) {
        return res.status(400).json({
            error: 'Launch not found.'
        })
    }

    const abort = launchModel.abortlaunch(id)
    return res.status(200).json(abort)
}

module.exports = {
    getAlllaunches,
    addlaunch,
    abortlaunch
}
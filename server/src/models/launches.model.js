let latestFlightNumber = 100

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 2, 2023'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

let launches  = new Map()
launches.set(launch.flightNumber, launch)

function getAlllaunches (req, res) {
    return Array.from(launches.values());
}

function addlaunches(launch) {
    latestFlightNumber++
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ['ZTM', 'NASA'],
        upcoming: true,
        success: true
    }))
}

function existslaunch(id) {
    return launches.has(id)
}

function abortlaunch(id) {
    const abort = launches.get(id)
    abort.upcoming = false
    abort.success = false

    return abort
}

module.exports = {
    getAlllaunches,
    addlaunches,
    existslaunch,
    abortlaunch
}
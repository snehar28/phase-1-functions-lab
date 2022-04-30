// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let result;

    if (blocks < 42) {
        result = 42 - blocks;
    } else {
        result = blocks - 42;
    }

    return result;
}

function distanceFromHqInFeet(blocks) {
    let blockdistance = distanceFromHqInBlocks(blocks);
    let result = blockdistance * 264;

    return result;
}

function distanceTravelledInFeet(start,destination) {

    let result;

    if (destination > start) {
        result = (destination - start) * 264;
    } else {
        result = (start - destination) * 264;
    }

    return result;
}

function calculatesFarePrice(start, destination) {
    let result;
    let blockdistance;

    if (destination > start) {
        blockdistance = destination - start;
    } else {
        blockdistance = start - destination;
    }

    let feetdistance = (blockdistance * 264) 
    if (feetdistance <= 400){
        result = 0;
    } else if ((feetdistance > 400) && (feetdistance <= 2000)) {
        result = ((feetdistance - 400) * 0.02);
    } else if ((feetdistance > 2000) && (feetdistance <= 2500)) {
        result = 25;
    } else {
        result = "cannot travel that far";
    }
    
    return result;
}
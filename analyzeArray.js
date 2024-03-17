function analyze(array) {

    let sum = 0;
    const length = array.length;
    let minVal = Infinity;
    let maxVal = -Infinity;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (array[i] < minVal) minVal = array[i];
        if (array[i] > maxVal) maxVal = array[i];
    }

    const avg = sum / length

    let analysis = {
        average: avg,
        min: minVal,
        max: maxVal,
        length: length,
    };

    return analysis;
}

module.exports = analyze;
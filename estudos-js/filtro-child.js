var data = {
    parent1: {
        child1: {
            source: true
        },
        child2: {
            source: true
        }
    },
    parent2: {
        child3: {
            source: true
        },
        child4: {
            source: false
        }
    },
    parent3: {
        child5: {
            source: false
        }
    }
}

var afterFilter = {};

for (const [key, value] of Object.entries(data)) {

    for (const [k, v] of Object.entries(value)) {

        const { source } = v;

        if (source !== true)
            continue;

        // If `afterFilter[key]` does not exist, init with {}
        afterFilter[key] = afterFilter[key] || {};
        afterFilter[key][k] = { source };

    }

}

console.log(afterFilter)

// console.log(data)
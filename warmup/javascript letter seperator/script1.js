var chef = {
    didCook: function (isSuc, isFail) {
        var didcook = false;
        if (didcook) {
            isSuc();
        }
        else {
            isFail();
        }
    }
}

function makesDinner() {
    console.log("made dinner");
}

function burnDinner() {
    console.log("eat the dinner");
}
chef.didCook(makesDinner, burnDinner);
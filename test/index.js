var tape = require("tape"),
    getEventKey = require("..");


tape("getEventKey(event) should return event key", function(assert) {
    assert.equal(getEventKey({
        type: "keypress",
        charCode: 13
    }), "Enter");
    assert.end();
});

function RaptorPlugin(name, overrides) {
    this.name = name;
    for (var key in overrides) {
        this[key] = overrides[key];
    }
}

RaptorPlugin.prototype.init = function() {};

RaptorPlugin.prototype.enable = function() {};

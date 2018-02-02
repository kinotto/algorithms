/**
 * emitter class with subscribing releasing cababilities
 */

var Emitter = (function(){
    function Emitter(){
        this.events = {};
    }
    Emitter.prototype.subscribe = function(evt, clb){
        this.events[evt] = this.events[evt] || [];
        this.events[evt].push(clb);
    }
    Emitter.prototype.emit = function(evt){
        for(var evt in this.events){
            this.events[evt].forEach(function(clb){
                clb();
            })
        }
    }
    Emitter.prototype.release = function(evt, clbtoRelease){
        for(var evt in this.events){
            var idxFound = -1;
            this.events[evt].forEach(function(clb, idx){
                if(clb === clbtoRelease){
                    idxFound = idx;
                }
            })
            if(idxFound >= -1){
                this.events[evt].splice(idxFound, 1);
                break;
            }
        }
    }
    return new Emitter(); //singleton
 }())

/**
 * test
 */

function expect(describe, result, expected){
    if(result === expected){
        console.log('test passed, ' + describe + ' expected ' + result + ' === ' + expected);
        return true;
       
    }
    console.log('test failed, ' + describe + ' expected ' + result + ' === ' + expected);
    return false;
}

var clb = function(){
    console.log('first test');
}
Emitter.subscribe('evt1', clb);

expect('exist a subscriber', !!Emitter.events.evt1, true);

Emitter.emit('evt1');

Emitter.release('evt1', clb)
expect('not exist any subscriber', !!Emitter.events.evt1.length, false);
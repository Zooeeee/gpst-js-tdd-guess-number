const main = require('../main/main');

describe('main()', () => {
    //暂定出的随机数是1234
    var answer = "1234";
    var string1 = "1234";
    var string2 = "5678";
    var string3 = "1236";
    var string4 = "3421";
    var string5 = "1216";
   
    it("全部猜对了",function(){
    var result = "4A0B";
    var expected = main(answer,string1);
    expect(expected).toEqual(result);
    });
   
    it("全部猜错了",function(){
        var result = "0A0B";
        var expected = main(answer,string2);
        expect(expected).toEqual(result);
    });
    
    it("猜错了几个",function(){
        var result = "3A0B";
        var expected = main(answer,string3);
        expect(expected).toEqual(result);
    }); 
    
    it("猜对了数字，但顺序全错",function(){
        var result = "0A4B";
        var expected = main(answer,string4);
        expect(expected).toEqual(result);
    });   
   
    it("猜对了数字，但顺序不对",function(){
        var result = "2A1B";
        var expected = main(answer,string5);
        expect(expected).toEqual(result);
    });   
   
});

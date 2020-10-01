export class MaskUtil {

    public usdMask = function (rawValue) {
        var numbers = rawValue.match(/\d/g);
        var numberLength = 0;
        if (numbers) {
          numberLength = numbers.join('').length;
        }
        if (numberLength <= 3) {
          return [/[0-9]/, /[0-9]/, /[0-9]/];
        }
        else if (numberLength == 4) {
            return [/[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/];
        }
        else if (numberLength == 5) {
          return [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/];
        }
        else if (numberLength == 6) {
          return [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/];
        }
      }
    
}

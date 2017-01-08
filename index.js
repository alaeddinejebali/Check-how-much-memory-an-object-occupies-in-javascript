<html>
  <head>
    <script src="memorySizeOf.js"></script>
  </head>
  <body>
    <script>
      var sizeString = memorySizeOf("hello");
      console.log(sizeString);
      //outputs: 10 bytes

      var sizeNumber = memorySizeOf(123);
      console.log(sizeNumber);
      //outputs: 8 bytes

      var sizeObject1 = memorySizeOf({persone: {name: 'John Doe', country: 'France'}});
      console.log(sizeObject1);
      //outputs: 28 bytes

      var sizeObject2 = memorySizeOf({persone: {name: 'John Doe', country: 'France', age: 30}});
      console.log(sizeObject2);
      //outputs: 36 bytes

      var sizeObject3 = memorySizeOf(123);
      console.log(sizeObject3);
      //outputs: 8 bytes
    </script>
  </body>
</html>

//Form validation

$(document).ready(function () {
  $("#myForm").validate({
      rules: {
          firstname: {
              required: true,
              minlength: 4
          },
          lastname: {
              required: true,
              minlength: 4
          },
          email: {
              required: true,
              email: true
          },
          comments: {
              required: true
          }
      },submitHandler:function(){
        SubForm();
      }

  })

});

// // Form Submission

// function SubForm (){
//   $.ajax({
//       url:'https://api.apispreadsheets.com/data/zytZ8l1WTSqI5h24/',
//       type:'post',
//       data:$("#myForm").serializeArray(),
//       success: function(){
//         alert("Form Data Submitted :)")
//         window.location.reload()
       
//       },
//       error: function(){
//         alert("There was an error :(")
//       }
//   });
// }

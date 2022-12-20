      
      
      






var viewModel = {
    FirstName : ko.observable(""),
    LastName : ko.observable(""),
    Email : ko.observable(""),
    AreaCode : ko.observable(""),
    Phone : ko.observable(""),
    CompanyName : ko.observable(""),
    Address : ko.observable(""),
    Address2 : ko.observable(""),
    City : ko.observable(""),
    Province : ko.observable(""),
    Postal : ko.observable(""),
    ProjectTitle : ko.observable(""),
    ProjectDuration : ko.observable(""),
    ProposalDetails : ko.observable(""),
    Objective : ko.observable(""),
    Budget : ko.observable(""),
    ApprovedFirstName : ko.observable(""),
    ApprovedLastName : ko.observable(""),
    ApproverSignature : ko.observable(""),
    itemdescription : ko.observable(""),
    price : ko.observable(""),
    quantity : ko.observable(""),
    itemdescription2 : ko.observable(""),
    price2 : ko.observable(""),
    quantity2 : ko.observable(""),
    itemdescription3 : ko.observable(""),
    price3 : ko.observable(""),
    quantity3 : ko.observable(""),

    item_description_1 : ko.observable(""),
    price_1 : ko.observable(""),
    quantity_1 : ko.observable(""),

    item_description_2 : ko.observable(""),
    price_2 : ko.observable(""),
    quantity_2 : ko.observable(""),

    item_description_3 : ko.observable(""),
    price_3 : ko.observable(""),
    quantity_3 : ko.observable(""),
    
   approversignature : ko.observable(""),


};
ko.applyBindings(viewModel);

var date = new Date().toLocaleDateString()

$('.form_date').html(date)

/*
function startCalc(){
    interval = setInterval("calc()",1);
    }
    function calc(){
    one = document.SumForm.firstBox.value;
    two = document.SumForm.secondBox.value; 
    document.SumForm.thirdBox.value = (one * 1) * (two * 1);
    }
    function stopCalc(){
    clearInterval(interval);
    }
    */

   $(function(){


    
    $('#price, #quantity,#price2, #quantity2,#price3, #quantity3,#price_1,#quantity_1,#price_2,#quantity_2,#price_3,#quantity_3').keyup(function(){
           
        var price = $('#price').val()
        
        var quantity = $('#quantity').val()
        var result = price*quantity;

        var price2 = $('#price2').val()
        var quantity2 = $('#quantity2').val()
        var result2 = price2*quantity2;

        var price3 = $('#price3').val()
        var quantity3 = $('#quantity3').val()
        var result3 = price3*quantity3;
      
        $('#result').val(result);
        $('#showresult').html(result);

        $('#result2').val(result2);
        $('#showresult2').html(result2);

        $('#result3').val(result3);
        $('#showresult3').html(result3);

        

        var price_1 = $('#price_1').val()
        var quantity_1 = $('#quantity_1').val()
        var result_1 = price_1*quantity_1;

        var price_2 = $('#price_2').val()
        var quantity_2 = $('#quantity_2').val()
        var result_2 = price_2*quantity_2;

        var price_3 = $('#price_3').val()
        var quantity_3 = $('#quantity_3').val()
        var result_3 = price_3*quantity_3;
      
        $('#result_1').val(result_1);
      
        $('#showresult_1').html(result_1);

        $('#result_2').val(result_2);
        $('#showresult_2').html(result_2);

        $('#result_3').val(result_3);
        $('#showresult_3').html(result_3);


        var finalresult = result+result3+result2+result_1+result_2+result_3
        $('#estbudget').val(finalresult);

       $('#estbudget1').html(finalresult)
      

    }) 
    

    
  
 
})




 
/*

$(document).ready(function(){
    $('#mains').focusin(function(){
        $(this).attr('class', 'class1');
    });
    
    $("#mains").focusout(function(){
        $(this).attr('class', 'class2');
    });
})

*/
$(document).ready(function() {
    $('#smoothed').signaturePad({
      drawOnly:true, 
      drawBezierCurves:true, 
      lineTop:200
    });
  });



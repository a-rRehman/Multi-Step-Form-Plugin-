jQuery(document).ready(function ($) {
  var localWpEmailSuccess = false;
  var ApiEmailSuccess = false;
  var verification_Status = false;
  $("#email").on("change", function () {
<<<<<<< HEAD
    var errorContainer = $("#email-error-message");
    var email = $(this).val();
=======
    var malFunctionCase = false;
    var mf1 = false;
    var mf2 = false;
    var errorContainer = jQuery("#email-error-message");
    var email = $("#email").val();
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
    var loader = $(".loader");
    // Validate the email using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
<<<<<<< HEAD
      toastr.error("Please enter a valid email address.", "Action Needed!");
=======
      errorContainer.text("Please enter a valid email address.");
      jQuery("#continueProcessButtonClose").hide();
      jQuery("#continueProcessButton").hide();
      jQuery("#tempClass").show();

      // toastr.error("Please enter a valid email address.", "Action Needed!");

      errorContainer.text("Please enter a valid email address.");
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
      return false;
    }
    // Show loader before making the AJAX request
    loader.css("display", "block");

    // Make AJAX request to local wp table
    $.ajax({
      url: customFormFullApi.ajaxurl,
      type: "POST",
      data: {
        action: "custom_email_validation_ajax_local",
        email: email,
      },
      success: function (response) {
        console.log(response);
        if (response) {
          localWpEmailSuccess = false;
          if (response.verification_status == 0) {
            verification_Status = true;
          } else {
            verification_Status = false;
          }
<<<<<<< HEAD
          console.log(
            "Verfication status O true 1 false : ",
=======
          if (
            (response.saasy_user_id == "" || response.business_id == "") &&
            response.verification_status == 0
          ) {
            // malFunctionCase = true;
            mf1 = true;
            console.log("mf1 (Although the userid and busid is empty) : ", mf1);
            // console.log("Malfunction Variable Value : ", malFunctionCase);
          }
          console.log(
            "Verification Status ([true Means => Not verified , false means: verified]) : ",
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
            verification_Status
          );
          console.log("LocalWpemail Status :", localWpEmailSuccess);
        } else {
          localWpEmailSuccess = true;
          console.log("LocalWpemail Status :", localWpEmailSuccess);
        }

        // -----------------------------------

        // Make AJAX request to custom API
        $.ajax({
          url: customEmailForm.ajaxurl,
          type: "POST",
          data: {
            action: "custom_email_validation_ajax",
            email: email,
          },
          success: function (response) {
<<<<<<< HEAD
            if (response == "true") {
              ApiEmailSuccess = false;
            } else {
              // Email is unique, clear error message
              ApiEmailSuccess = true;
            }

=======
             console.log(response);
            if (response.error) {
              console.error(response);
              jQuery("#email").trigger("change");
              return;
            }
            var gettingData = JSON.parse(response.body);
            var modifiedResponse = gettingData.data;
            if (modifiedResponse == true) {
              ApiEmailSuccess = false; //false matlab api ma ha
              mf2 = true;
              if (mf1 == true && mf2 == true) {
                malFunctionCase = true;
              }
            } else {
              ApiEmailSuccess = true;
            }


>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
            //Person who is a new user and never filled any form(" ")
            if (localWpEmailSuccess && ApiEmailSuccess) {
              errorContainer.text("");
              $("#continueProcessButtonClose").hide();
              $("#continueProcessButton").hide();
              $("#tempClass").show();
<<<<<<< HEAD
=======
              console.log("In Local Wp Table :", localWpEmailSuccess);
              console.log("In Api  :", ApiEmailSuccess);
              console.log("Malfunction Status :", malFunctionCase);
              console.log("Verification Status  :", verification_Status);
              console.log("---------------------------------------------");
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
            }

            //Person who filled the two forms but not verified (In both api and local but not verified)
            else if (
              !localWpEmailSuccess &&
              !ApiEmailSuccess &&
<<<<<<< HEAD
              verification_Status
=======
              verification_Status &&
              !malFunctionCase
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
            ) {
              // errorContainer.text("In both api and local but not verified");
              errorContainer.text("Do you want to continue previous ?");
              $("#continueProcessButtonClose").show();
              $("#continueProcessButton").show();
              $("#tempClass").show();
<<<<<<< HEAD
=======
              console.log("In Local Wp Table :", localWpEmailSuccess);
              console.log("In Api  :", ApiEmailSuccess);
              console.log("Malfunction Status :", malFunctionCase);
              console.log("Verification Status  :", verification_Status);
              console.log("---------------------------------------------");
            }

            //Api ma nhi ha record lakin hmaray pass ha wp ma
            else if (
              !localWpEmailSuccess &&
              ApiEmailSuccess &&
              verification_Status &&
              !malFunctionCase
            ) {
              errorContainer.text("Do you want to continue previous ?");
              $("#continueProcessButtonClose").show();
              $("#continueProcessButton").show();
              $("#tempClass").show();
              console.log("In Local Wp Table :", localWpEmailSuccess);
              console.log("In Api  :", ApiEmailSuccess);
              console.log("Malfunction Status :", malFunctionCase);
              console.log("Verification Status  :", verification_Status);
              console.log("new case added");
              console.log("---------------------------------------------");
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
            }

            //Person who filled the two forms and verified (In both api and local and  Verified)
            else if (
              !localWpEmailSuccess &&
              !ApiEmailSuccess &&
<<<<<<< HEAD
              !verification_Status
=======
              !verification_Status &&
              !malFunctionCase
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
            ) {
              errorContainer.text(
                "Email already exists. Please choose a different one."
              );
              $("#continueProcessButtonClose").hide();
              $("#continueProcessButton").hide();
              $("#tempClass").show();
<<<<<<< HEAD
            }

            //Person who filled the first form and left(Sirf Local ma ha)
            else if (!localWpEmailSuccess) {
              // errorContainer.text("Sirf Local ma ha");
              errorContainer.text("Do you want to continue previous ?");
              $("#continueProcessButtonClose").show();
              $("#continueProcessButton").show();
              $("#tempClass").show();
            }

            //Person whoES EMAIL IS ONLY IN API MEANS BEFORE MAINTING LOCAL IT WAS THERE
            else if (!ApiEmailSuccess) {
=======
              console.log("In Local Wp Table :", localWpEmailSuccess);
              console.log("In Api  :", ApiEmailSuccess);
              console.log("Malfunction Status :", malFunctionCase);
              console.log("Verification Status  :", verification_Status);
              console.log("---------------------------------------------");
            }
            //if userid or bussid is not stored due to some error
            else if (malFunctionCase && !ApiEmailSuccess) {
              errorContainer.text(
                "Email already exists. Please choose a different one."
              );
              console.log("Condition meeted");
              $("#continueProcessButtonClose").hide();
              $("#continueProcessButton").hide();
              $("#tempClass").show();
              console.log("In Local Wp Table :", localWpEmailSuccess);
              console.log("In Api  :", ApiEmailSuccess);
              console.log("Malfunction Status :", malFunctionCase);
              console.log("Verification Status  :", verification_Status);
              console.log("---------------------------------------------");
              loader.css("display", "none");
              return;
            }
            //Person whoES EMAIL IS ONLY IN API MEANS BEFORE MAINTING LOCAL IT WAS THERE
            else if (
              !ApiEmailSuccess &&
              localWpEmailSuccess &&
              !malFunctionCase
            ) {
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
              errorContainer.text(
                "Email already exists. Please choose a different one."
              );
              $("#continueProcessButtonClose").hide();
              $("#continueProcessButton").hide();
              $("#tempClass").show();
<<<<<<< HEAD
            }
=======
              console.log("In Local Wp Table :", localWpEmailSuccess);
              console.log("In Api  :", ApiEmailSuccess);
              console.log("Verification Status  :", verification_Status);
              console.log("Malfunction Status :", malFunctionCase);
              console.log("---------------------------------------------");
            }
			loader.css("display", "none");
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
          },
          error: function (error) {
            console.log(error);
          },
          complete: function () {
            // Hide overlay and loader after the AJAX request is complete
<<<<<<< HEAD
            loader.css("display", "none");
=======
           //  loader.css("display", "none");
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
          },
        });

        //------------------------------------
      },
    });
  });

<<<<<<< HEAD
=======
  /*
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
  //Hadeling when continue process is clicked
  $("#continueProcessButton").on("click", function () {
    // Make AJAX request
    var email = jQuery("#email").val();
    var loader = $(".loader");
    loader.css("display", "block");
    $.ajax({
      url: customFormFull2Api.ajaxurl,
      type: "POST",
      data: {
        action: "continueProcessButton",
        email: email,
      },
      success: function (response) {
        console.log(response);

        if (response.business_name !== null) {
          //  window.location.href = customFormFull2Api.verification_url;
<<<<<<< HEAD
          jQuery(".main-container1").hide();
=======
          jQuery(".firstStep").hide();
>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
          jQuery(".putEmail").text(email);
          jQuery(".main-container-email").show();
        }

        $("#first_name").val(response.first_name);
        $("#last_name").val(response.last_name);
        $("#email").val(response.email);
        // $("#password").val(response.password);
        // $("#confirm_password").val(response.email);
        //  $("#terms_and_conditions").val("1");
        $("#phone_number").val(response.phone_number);
        $("#business_name").val(response.business_name);
        $("#business_info_choice").val(response.business_info_choice);
        $("#email-error-message").text("");
        $("#tempClass").hide();
      },
      complete: function () {
        loader.css("display", "none");
      },
    });
  });

<<<<<<< HEAD
=======
*/

  //Hadeling when continue process is clicked
  $("#continueProcessButton").on("click", function () {
    // Make AJAX request
    var email = jQuery("#email").val();
    var loader = $(".loader");
    loader.css("display", "block");
    console.log("1", localWpEmailSuccess);
    console.log("2", ApiEmailSuccess);
    $.ajax({
      url: customFormFull2Api.ajaxurl,
      type: "POST",
      data: {
        action: "continueProcessButton",
        email: email,
        localWpEmailSuccess: localWpEmailSuccess,
        ApiEmailSuccess: ApiEmailSuccess,
      },
      success: function (response) {
        console.log(response);

        if (response.existing_row) {
          console.log(response.existing_row.id);
          $("#first_name").val(response.existing_row.first_name);
          $("#last_name").val(response.existing_row.last_name);
          $("#email").val(response.existing_row.email);
          $("#phone_number").val(response.existing_row.phone_number);
          $("#business_name").val(response.existing_row.business_name);
          $("#email-error-message").text("");
          $("#tempClass").hide();
          return;
        }
        const alpha = JSON.parse(response.body);
        // console.log(alpha.success);
        if (alpha.success) {
          console.log("OTP Sent to Email");
          jQuery(".firstStep").hide();
          jQuery(".putEmail").text(email);
          jQuery(".main-container-email").show();
		  jQuery(".otpBox:first").focus();
        } else {
          console.log("OTP Didnot sent to Email");
          console.log(alpha.message);
        }
      },
      error: function (error) {
        console.log("error: ", error);
      },
      complete: function () {
        loader.css("display", "none");
      },
    });
  });

>>>>>>> 36f7441ac0c1f73c69d7c9d24e3b12cdbe95048d
  //Handeling close button
  $("#continueProcessButtonClose").on("click", function () {
    if (!localWpEmailSuccess && !ApiEmailSuccess) {
      $("#email-error-message").text(
        "Email already exists. Please choose a different one."
      );
      $("#continueProcessButtonClose").hide();
      $("#continueProcessButton").hide();
      $("#tempClass").show();
      exit;
    }
    $("#email-error-message").text("");
    $("#tempClass").hide();
  });
});

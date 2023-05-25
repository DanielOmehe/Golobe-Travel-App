

        <?php

        // MySQL database credentials
include 'config.php';
 

        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection

        if ($conn->connect_error) {

            die("Connection failed: " . $conn->connect_error);

        }

        // Retrieve form data

        $name = $_POST['name'];

        $email = $_POST['email'];

        $phone = $_POST['phone'];

        $tourPackage = $_POST['tour_package'];

        // Sanitize form data

        $name = mysqli_real_escape_string($conn, $name);

        $email = mysqli_real_escape_string($conn, $email);

        $phone = mysqli_real_escape_string($conn, $phone);

        $tourPackage = mysqli_real_escape_string($conn, $tourPackage);

        // Get the current date and time

        $submissionDateTime = date("Y-m-d H:i:s");

        // Construct SQL query

        $sql = "INSERT INTO form_submissions (name, email, phone, tour_package, submission_datetime) 

                VALUES ('$name', '$email', '$phone', '$tourPackage', '$submissionDateTime')";

        // Execute query

        if ($conn->query($sql) === TRUE) {

            echo "Form submitted successfully!";

        } else {

            echo "Error: " . $sql . "<br>" . $conn->error;

        }

        // Close connection

        $conn->close();

        ?>

    
  

<? php

session_start ();

$con = mysql_connect('localhost','root','');
mysqli_select_db($con, 'databasename');

$name = $_POST('user');
$pass = $_POST('password');

$s = "select * from tablename where name = '$name'";

$result = mysqli_quary($con,$s);

$num = mysqli_num_row($result);

if($num == 1)
{
    echo "User name is Already taken";
}
else
{
    $reg = "insert into tablename =(name,password) value ($name, $pass)";
    
}


?>
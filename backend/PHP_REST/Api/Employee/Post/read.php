<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    

    include_once '../../../Config/Database.php';
    include_once '../../../Models/Post.php';

    $database = new Database();
    $db = $database->connect();

    $post = new Post($db);

    $result = $post->read();

    $num = $result->rowCount();

    if($num > 0)
    {
        $employees_arr = array();
        $employees_arr['data'] = array();
        
        while($row = $result->fetch(PDO::FETCH_ASSOC))
        {
            extract($row);

            $employee_item = array(
                'id' => $id,
                'nom' => $nom,
                'prenom' => $prenom,
                'age' => $age,
                'date_nes' => $date_nes,
                'email' => $email,
                'adresse' => $adresse,
                
            );

            array_push($employees_arr['data'],$employee_item);
        }

        echo json_encode($employees_arr);
    }
    else
    {
        echo json_encode(array('message' => 'No Employees Found'));
    }

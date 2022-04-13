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

    

    include_once '../Config/Database.php';
    include_once '../Models/EMPLOYEUR.php';

    $database = new Database();
    $db = $database->connect();

    $post = new Employeur($db);

    $result = $post->read();

    $num = $result->rowCount();

    if($num > 0)
    {
        $employeurs_arr = array();
        $employeurs_arr['data'] = array();
        
        while($row = $result->fetch(PDO::FETCH_ASSOC))
        {
            extract($row);

            $employeur_item = array(
                'username' => $username,
                'nom' => $nom,
                'prenom' => $prenom,
                'email' => $email,
                'password' => $password,
                'date_naissance' => $date_naissance,
                'sexe' => $sexe,
                'pays' => $pays,
                'adresse' => $adresse,
                'code_postal' => $code_postal,
                'tel_mobile' => $tel_mobile,
                'tel_fixe' => $tel_fixe,
                'nom_societe' => $nom_societe,
                'type_societe' => $type_societe,
                'adresse_societe' => $adresse_societe,
                
            );

            array_push($employeurs_arr['data'],$employeur_item);
        }

        echo json_encode($employeurs_arr);
    }
    else
    {
        echo json_encode(array('message' => 'No employeur Found'));
    }

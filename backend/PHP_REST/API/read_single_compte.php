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
    include_once '../Models/COMPTE.php';

    $database = new Database();
    $db = $database->connect();

    $post = new Compte($db);

    $post->email = isset($_GET['email']) ? $_GET['email'] : die();
    $post->password = isset($_GET['password']) ? $_GET['password'] : die();

    $post->read_single();
    $compte_arr['data'] = array();
    $compte_arr['message'] = array();
    if($post->read_single()->rowCount()>0)
    {
        

            $compte_item = array(
                'message' => 'Found',
                'username' => $post->username,
                'nom' => $post->nom,
                'prenom' => $post->prenom,
                'email' => $post->email,
                'password' => $post->password,
                'date_naissance' => $post->date_naissance,
                'sexe' => $post->sexe,
                'pays' => $post->pays,
                'adresse' => $post->adresse,
                'code_postal' => $post->code_postal,
                'tel_mobile' => $post->tel_mobile,
                'tel_fixe' => $post->tel_fixe,
                
            );

           
            array_push($compte_arr['data'],$compte_item);
            array_push($compte_arr['message'],array('message' => 'Found'));

        echo json_encode($compte_item);

    }
    else
    {
        echo json_encode(array('message' => 'No Compte Found'));
    }
    
        
    

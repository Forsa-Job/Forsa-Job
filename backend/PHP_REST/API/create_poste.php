<?php

    // header('Aaccess-Control-Allow-Methods: POST');
    // header('Aaccess-Control-Allow-Headers: application/json');
    
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
    include_once '../Models/POSTES.php';

    $database = new Database();
    $db = $database->connect();

    $post = new Postes($db);

    $data = json_decode(file_get_contents("php://input"));

    $post->username = $data->username;
    $post->nom = $data->nom;
    $post->prenom = $data->prenom;
    $post->specialite = $data->specialite;
    $post->niveau_etude = $data->niveau_etude;
    
    $post->description = $data->description;
    

    if($post->create())
    {
        echo json_encode(
            array('message' => 'poste created')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'poste Not Created')
        );
    }

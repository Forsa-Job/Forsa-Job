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
    include_once '../Models/EMPLOYEUR.php';
    include_once '../Models/COMPTE.php';

    $database = new Database();
    $db = $database->connect();

    $post = new Compte($db);
    $postE = new Employeur($db);

    $data = json_decode(file_get_contents("php://input"));

    $post->username = $data->username;
    $post->nom = $data->nom;
    $post->prenom = $data->prenom;
    $post->email = $data->email;
    $post->password = $data->password;
    $post->date_naissance = $data->date_naissance;
    $post->sexe = $data->sexe;
    $post->pays = $data->pays;
    $post->adresse = $data->adresse;
    $post->code_postal = $data->code_postal;
    $post->tel_mobile = $data->tel_mobile;
    $post->tel_fixe = $data->tel_fixe;

    $postE->username = $data->username;
    $postE->nom_societe = $data->nom_societe;
    $postE->type_societe = $data->type_societe;
    $postE->adresse_societe = $data->adresse_societe;

    if($post->create())
    {
        echo json_encode(
            array('message' => 'Compte Created')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'Compte Not Created')
        );
    }
    if($postE->create())
    {
        echo json_encode(
            array('message' => 'Employeur Created')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'Employeur Not Created')
        );
    }

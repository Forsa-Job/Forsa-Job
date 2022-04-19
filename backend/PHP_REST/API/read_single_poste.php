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
    include_once '../Models/POSTES.php';

    $database = new Database();
    $db = $database->connect();

    $post = new Postes($db);

    $post->username = isset($_GET['username']) ? $_GET['username'] : die();

    $post->read_single_post();
    $poste_arr['data'] = array();
    $poste_arr['message'] = array();
    if($post->read_single_post()->rowCount()>0)
    {
        

            $poste_item = array(
                'message' => 'Found',
                'username' => $post->username,
                'nom' => $post->nom,
                'prenom' => $post->prenom,
                'date_publication' => $post->date_publication,
                'specialite' => $post->specialite,
                'niveau_etude' => $post->niveau_etude,
                'description' => $post->description,
                
                
            );

           
            array_push($poste_arr['data'],$poste_item);

        echo json_encode($poste_arr);

    }
    else
    {
        echo json_encode(array('message' => 'No poste Found'));
    }
    
        
    

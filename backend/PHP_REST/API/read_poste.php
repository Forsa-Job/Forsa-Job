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

    $result = $post->read();

    $num = $result->rowCount();

    if($num > 0)
    {
        $postes_arr = array();
        $postes_arr['data'] = array();
        
        while($row = $result->fetch(PDO::FETCH_ASSOC))
        {
            extract($row);

            $poste_item = array(
                'username' => $username,
                'nom' => $nom,
                'prenom' => $prenom,
                'specialite' => $specialite,
                'niveau_etude' => $niveau_etude,
                'date_publication' => $date_publication,
                'description' => $description,
                
            );
            
            array_push($postes_arr['data'],$poste_item);
        }

        echo json_encode($postes_arr);
    }
    else
    {
        echo json_encode(array('message' => 'No Poste Found'));
    }

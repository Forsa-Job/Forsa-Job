<?php
    class Employe
    {
        private $conn;

        private $Table_compte = 'compte';
        private $Table_employe = 'employe';

        public $username;
        public $specialite;
        public $niveau_etude;
        public $etablissement;
        
        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function read()
        {
            $query1 = 'SELECT e.username,c.nom,c.prenom,c.email,c.password,c.date_naissance,c.sexe,c.pays,c.adresse,c.code_postal,c.tel_mobile,c.tel_fixe,e.specialite,e.niveau_etude,e.etablissement FROM compte c , employe e where e.username=c.username;';

            $stmtc = $this->conn->prepare($query1);

            $stmtc->execute();

            return $stmtc;
        }

        public function create()
        {


            $query = 'INSERT INTO ' . $this->Table_employe . 
            '
            SET 
                username = :username,
                specialite = :specialite,
                niveau_etude = :niveau_etude,
                etablissement = :etablissement
               
            ';

            
            $stmt = $this->conn->prepare($query);
            
            $this->username = htmlspecialchars(strip_tags($this->username));
            $this->specialite = htmlspecialchars(strip_tags($this->specialite));
            $this->niveau_etude = htmlspecialchars(strip_tags($this->niveau_etude));
            $this->etablissement = htmlspecialchars(strip_tags($this->etablissement));

            $stmt->bindParam(':username', $this->username);
            $stmt->bindParam(':specialite', $this->specialite);
            $stmt->bindParam(':niveau_etude', $this->niveau_etude);
            $stmt->bindParam(':etablissement', $this->etablissement);

           

            if($stmt->execute())
            {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;



        }
    }
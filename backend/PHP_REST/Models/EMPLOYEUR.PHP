<?php
    class Employeur
    {
        private $conn;

        private $Table_compte = 'compte';
        private $Table_employeur = 'employeur';

        public $username;
        public $nom_societe;
        public $type_societe;
        public $adresse_societe;
        
        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function read()
        {
            $query = 'SELECT e.username,c.nom,c.prenom,c.email,c.password,c.date_naissance,c.sexe,c.pays,c.adresse,c.code_postal,c.tel_mobile,c.tel_fixe,e.nom_societe,e.type_societe,e.adresse_societe FROM compte c , employeur e where e.username=c.username;';

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function create()
        {
            $query = 'INSERT INTO ' . $this->Table_employeur . 
            '
            SET 
                username = :username,
                nom_societe = :nom_societe,
                type_societe = :type_societe,
                adresse_societe = :adresse_societe

            ';

            $stmt = $this->conn->prepare($query);

            $this->username = htmlspecialchars(strip_tags($this->username));
            $this->nom_societe = htmlspecialchars(strip_tags($this->nom_societe));
            $this->type_societe = htmlspecialchars(strip_tags($this->type_societe));
            $this->adresse_societe = htmlspecialchars(strip_tags($this->adresse_societe));
            

            $stmt->bindParam(':username', $this->username);
            $stmt->bindParam(':nom_societe', $this->nom_societe);
            $stmt->bindParam(':type_societe', $this->type_societe);
            $stmt->bindParam(':adresse_societe', $this->adresse_societe);
            


            if($stmt->execute())
            {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;

        }
    }
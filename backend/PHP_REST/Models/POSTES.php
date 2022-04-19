<?php
    class Postes
    {
        private $conn;

        private $Table_poste = 'poste';
        private $Table_employe = 'employe';

        public $username;
        public $nom;
        public $prenom;
        public $specialite;
        public $niveau_etude;
        public $date_publication;
        
        public $description;
        
        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function read()
        {
            $query = 'SELECT username,nom,prenom,date_publication,specialite,niveau_etude,description FROM poste';

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function read_single_post()
        {
            $query = 'SELECT username,nom,prenom,date_publication,specialite,niveau_etude,description FROM poste WHERE username=:username;';
            
            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(':username', $this->username);
            

            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if($stmt->rowCount()>0)
            {
                $this->username = $row['username'];
                $this->nom = $row['nom'];
                $this->prenom = $row['prenom'];
                $this->date_publication = $row['date_publication'];
                $this->specialite = $row['specialite'];
                $this->niveau_etude = $row['niveau_etude'];
                $this->description = $row['description'];
                
            }
        

            return $stmt;
            
        }

        public function create()
        {


            $query = 'INSERT INTO ' . $this->Table_poste . 
            '
            SET 
                username = :username,
                nom = :nom,
                prenom = :prenom,
                
                specialite = :specialite,
                niveau_etude = :niveau_etude,
                description = :description
               
            ';

            
            $stmt = $this->conn->prepare($query);
            
            $this->username = htmlspecialchars(strip_tags($this->username));
            $this->nom = htmlspecialchars(strip_tags($this->nom));
            $this->prenom = htmlspecialchars(strip_tags($this->prenom));
            
            $this->specialite = htmlspecialchars(strip_tags($this->specialite));
            $this->niveau_etude = htmlspecialchars(strip_tags($this->niveau_etude));
            $this->description = htmlspecialchars(strip_tags($this->description));

            $stmt->bindParam(':username', $this->username);
            $stmt->bindParam(':nom', $this->nom);
            $stmt->bindParam(':prenom', $this->prenom);
           
            $stmt->bindParam(':specialite', $this->specialite);
            $stmt->bindParam(':niveau_etude', $this->niveau_etude);
            $stmt->bindParam(':description', $this->description);

           

            if($stmt->execute())
            {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;



        }
    }
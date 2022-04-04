<?php
    class Post
    {
        private $conn;
        private $table = 'employee';

        public $id;
        public $nom;
        public $prenom;
        public $age;
        public $email;
        public $date_nes;
        public $adresse;
        
        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function read()
        {
            $query = 'SELECT id,nom,prenom,age FROM ' . $this->table ;

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function create()
        {
            $query = 'INSERT INTO ' . $this->table . 
            '
            SET 
                id = :id,
                nom = :nom,
                prenom = :prenom,
                age = :age,
                date_nes = :date_nes,
                email = :email,
                adresse = :adresse
            ';

            $stmt = $this->conn->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->nom = htmlspecialchars(strip_tags($this->nom));
            $this->prenom = htmlspecialchars(strip_tags($this->prenom));
            $this->age = htmlspecialchars(strip_tags($this->age));
            $this->date_nes = htmlspecialchars(strip_tags($this->date_nes));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->adresse = htmlspecialchars(strip_tags($this->adresse));

            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':nom', $this->nom);
            $stmt->bindParam(':prenom', $this->prenom);
            $stmt->bindParam(':age', $this->age);
            $stmt->bindParam(':date_nes', $this->date_nes);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':adresse', $this->adresse);


            if($stmt->execute())
            {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;

        }
    }
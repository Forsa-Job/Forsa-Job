<?php
    class Compte
    {
        private $conn;

        private $Table_compte = 'compte';

        public $username;
        public $nom;
        public $prenom;
        public $email;
        public $password;
        public $date_naissance;
        public $sexe;
        public $pays;
        public $adresse;
        public $code_postal;
        public $tel_mobile;
        public $tel_fixe;
        public $picture;
        
        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function read()
        {
            $query = 'SELECT username,nom,prenom,email,password,date_naissance,sexe,pays,adresse,code_postal,tel_mobile,tel_fixe,picture FROM ' . $this->Table_compte ;

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function create()
        {
            $query = 'INSERT INTO ' . $this->Table_compte . 
            '
            SET 
                username = :username,
                nom = :nom,
                prenom = :prenom,
                email = :email,
                password = :password,
                date_naissance = :date_naissance,
                pays = :pays,
                sexe = :sexe,
                adresse = :adresse,
                code_postal = :code_postal,
                tel_mobile = :tel_mobile,
                tel_fixe = :tel_fixe
            ';

            $stmt = $this->conn->prepare($query);

            $this->username = htmlspecialchars(strip_tags($this->username));
            $this->nom = htmlspecialchars(strip_tags($this->nom));
            $this->prenom = htmlspecialchars(strip_tags($this->prenom));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->password = htmlspecialchars(strip_tags($this->password));
            $this->date_naissance = htmlspecialchars(strip_tags($this->date_naissance));
            $this->pays = htmlspecialchars(strip_tags($this->pays));
            $this->sexe = htmlspecialchars(strip_tags($this->sexe));
            $this->adresse = htmlspecialchars(strip_tags($this->adresse));
            $this->code_postal = htmlspecialchars(strip_tags($this->code_postal));
            $this->tel_mobile = htmlspecialchars(strip_tags($this->tel_mobile));
            $this->tel_fixe = htmlspecialchars(strip_tags($this->tel_fixe));

            $stmt->bindParam(':username', $this->username);
            $stmt->bindParam(':nom', $this->nom);
            $stmt->bindParam(':prenom', $this->prenom);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':password', $this->password);
            $stmt->bindParam(':date_naissance', $this->date_naissance);
            $stmt->bindParam(':pays', $this->pays);
            $stmt->bindParam(':sexe', $this->sexe);
            $stmt->bindParam(':adresse', $this->adresse);
            $stmt->bindParam(':code_postal', $this->code_postal);
            $stmt->bindParam(':tel_mobile', $this->tel_mobile);
            $stmt->bindParam(':tel_fixe', $this->tel_fixe);


            if($stmt->execute())
            {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;

        }
    }
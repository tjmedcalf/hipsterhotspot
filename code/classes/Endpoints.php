<?php

class Endpoint extends API {
	public function __contruct($request) {
		parent::__contruct($request);
	}


	protected function getspots() {
        $query = "SELECT * FROM spots";
        $object = new stdClass;

        $object->endpoint = 'getspots';
        $object->spots = $this->select($query);

        return $object;
        

        /*if ($this->method == 'GET') {
            return "Your name is " . $this->User->name;
        } else {
            return "Only accepts GET requests";
        }*/
     }
     
     protected function getreview($args) {
        $query = "SELECT s.title, s.address, r.basic
        		  FROM reviews as r
        		  INNER JOIN spots as s
        		  ON s.id = r.spot_id
        		  WHERE r.spot_id = ".$args[0];
        

        $object = new stdClass;

        $object->endpoint = 'getreview';
        $result = $this->select($query);
        
        if($result) {
        	$object->review = $result[0];

        	return $object;
        } else {
        	$error = new stdClass;
        	$error->error = 'This is an error message';
        	$error->args = $args;
        	$error->query = $query;
        	$error->response = $this->con->error;

        	return $error;
        }
        

        /*if ($this->method == 'GET') {
            return "Your name is " . $this->User->name;
        } else {
            return "Only accepts GET requests";
        }*/
     }
}
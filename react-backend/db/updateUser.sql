UPDATE userinfo
  SET (first_name, last_name, pic, specs, gtky) = ($2, $3, $4, $5, $6)
  WHERE id = $1;

package dal;

import org.springframework.data.jpa.repository.JpaRepository;

import bo.film.Etat;

public interface EtatDAO extends JpaRepository<Etat, String> {

}

package dal;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import bo.film.Film;


public class FilmDAOHibernateImpl implements FilmDAO {
	private EntityManagerFactory emf;
	
	public FilmDAOHibernateImpl() {
		emf = Persistence.createEntityManagerFactory("FilRougeIntra");
	}
			
	@Override
	public List<Film> selectAll() {
		EntityManager em = emf.createEntityManager();
		List<Film> resultat = em.createQuery("from Film", Film.class).getResultList();
		em.close();
		return resultat;
	}

	@Override
	public Film selectById(int noFilm) {
		EntityManager em = emf.createEntityManager();
		Film film = em.find(Film.class, noFilm);
		em.close();
		return film;
	}
	
	@Override
	public void insert(Film film) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		try {
			em.persist(film);
			transaction.commit();
		} catch (Exception e) {
			e.printStackTrace();
			transaction.rollback();
		}
		em.close();
	}

	@Override
	public void update(Film film) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		em.merge(film);
		em.getTransaction().commit();
		em.close();
	}

	@Override
	public void deleteById(int noFilm) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		Query query = em.createQuery("DELETE FROM Film f WHERE noFilm = :noFilm");
		query.setParameter("noFilm", noFilm);
		query.executeUpdate();
		transaction.commit();
		em.close();
	}
}

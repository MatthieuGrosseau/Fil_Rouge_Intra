package rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bll.CategorieBLL;
import bll.EtatBLL;
import bll.FilmVersionBLL;
import bll.PegiBLL;
import bo.film.Categorie;
import bo.film.Etat;
import bo.film.FilmVersion;
import bo.film.Pegi;

@RestController
@RequestMapping(path = "/autres")
public class GestionAutres {
	@Autowired
	private CategorieBLL cbll;
	@Autowired
	private EtatBLL ebll;
	@Autowired
	private FilmVersionBLL vbll;
	@Autowired
	private PegiBLL pbll;
	
	@GetMapping(path="/categories")
	public ResponseEntity<List<Categorie>> selectAllCategories() {
		return new ResponseEntity<List<Categorie>>(cbll.selectAll(), HttpStatus.OK);
	}
	
	@GetMapping(path="/etats")
	public ResponseEntity<List<Etat>> selectAllEtats() {
		return new ResponseEntity<List<Etat>>(ebll.selectAll(), HttpStatus.OK);
	}
	
	@GetMapping(path="/film_versions")
	public ResponseEntity<List<FilmVersion>> selectAllFilmVersions() {
		return new ResponseEntity<List<FilmVersion>>(vbll.selectAll(), HttpStatus.OK);
	}
	
	@GetMapping(path="/pegi")
	public ResponseEntity<List<Pegi>> selectAllPegi() {
		return new ResponseEntity<List<Pegi>>(pbll.selectAll(), HttpStatus.OK);
	}
	
	@GetMapping(path="/categories/{id}")
	public ResponseEntity<Categorie> selectCategorieById(@PathVariable("id") String id) {
		if (cbll.contains(id)) {
			return new ResponseEntity<Categorie>(cbll.selectById(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<Categorie>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping(path="/etats/{id}")
	public ResponseEntity<Etat> selectEtatById(@PathVariable("id") String id) {
		if (ebll.contains(id)) {
			return new ResponseEntity<Etat>(ebll.selectById(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<Etat>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping(path="/film_versions/{id}")
	public ResponseEntity<FilmVersion> selectFilmVersionById(@PathVariable("id") String id) {
		if (vbll.contains(id)) {
			return new ResponseEntity<FilmVersion>(vbll.selectById(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<FilmVersion>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping(path="/pegi/{id}")
	public ResponseEntity<Pegi> selectPegiById(@PathVariable("id") int id) {
		if (pbll.contains(id)) {
			return new ResponseEntity<Pegi>(pbll.selectById(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<Pegi>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(path = "/categories")
	public ResponseEntity<Categorie> insert(@RequestBody Categorie c) {
		cbll.save(c);
		return new ResponseEntity<Categorie>(c, HttpStatus.CREATED);
	}
	
	@PostMapping(path = "/etats")
	public ResponseEntity<Etat> insert(@RequestBody Etat e) {
		ebll.save(e);
		return new ResponseEntity<Etat>(e, HttpStatus.CREATED);
	}
	
	@PostMapping(path = "/film_versions")
	public ResponseEntity<FilmVersion> insert(@RequestBody FilmVersion v) {
		vbll.save(v);
		return new ResponseEntity<FilmVersion>(v, HttpStatus.CREATED);
	}
	
	@PostMapping(path = "/pegi")
	public ResponseEntity<Pegi> insert(@RequestBody Pegi p) {
		pbll.save(p);
		return new ResponseEntity<Pegi>(p, HttpStatus.CREATED);
	}
	
	@PutMapping("/categories/{id}")
	public ResponseEntity<Categorie> updateCategorie(
			@PathVariable("id") String id,
			@RequestBody Categorie c) {
		if (cbll.contains(id)) {
			c.setCodeCategorie(id);
			cbll.save(c);
			return new ResponseEntity<Categorie>(c, HttpStatus.OK);
		} else {
			return new ResponseEntity<Categorie>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/etats/{id}")
	public ResponseEntity<Etat> updateEtat(
			@PathVariable("id") String id,
			@RequestBody Etat e) {
		if (ebll.contains(id)) {
			e.setCodeEtat(id);
			ebll.save(e);
			return new ResponseEntity<Etat>(e, HttpStatus.OK);
		} else {
			return new ResponseEntity<Etat>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/film_versions/{id}")
	public ResponseEntity<FilmVersion> updateFilmVersion(
			@PathVariable("id") String id,
			@RequestBody FilmVersion v) {
		if (vbll.contains(id)) {
			v.setCodeVersion(id);
			vbll.save(v);
			return new ResponseEntity<FilmVersion>(v, HttpStatus.OK);
		} else {
			return new ResponseEntity<FilmVersion>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/pegi/{id}")
	public ResponseEntity<Pegi> updatePegi(
			@PathVariable("id") int id,
			@RequestBody Pegi p) {
		if (pbll.contains(id)) {
			p.setCodePegi(id);
			pbll.save(p);
			return new ResponseEntity<Pegi>(p, HttpStatus.OK);
		} else {
			return new ResponseEntity<Pegi>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/categories/{id}")
	public ResponseEntity<Categorie> deleteCategorie(@PathVariable("id") String id) {
		if (cbll.contains(id)) {
			Categorie c = cbll.selectById(id);
			cbll.deleteById(id);
			return new ResponseEntity<Categorie>(c, HttpStatus.OK);
		} else {
			return new ResponseEntity<Categorie>(HttpStatus.CONFLICT);
		}
	}
	
	@DeleteMapping("/etats/{id}")
	public ResponseEntity<Etat> deleteEtat(@PathVariable("id") String id) {
		if (ebll.contains(id)) {
			Etat e = ebll.selectById(id);
			ebll.deleteById(id);
			return new ResponseEntity<Etat>(e, HttpStatus.OK);
		} else {
			return new ResponseEntity<Etat>(HttpStatus.CONFLICT);
		}
	}
	
	@DeleteMapping("/film_versions/{id}")
	public ResponseEntity<FilmVersion> deleteFilmVersion(@PathVariable("id") String id) {
		if (vbll.contains(id)) {
			FilmVersion v = vbll.selectById(id);
			vbll.deleteById(id);
			return new ResponseEntity<FilmVersion>(v, HttpStatus.OK);
		} else {
			return new ResponseEntity<FilmVersion>(HttpStatus.CONFLICT);
		}
	}
	
	@DeleteMapping("/pegi/{id}")
	public ResponseEntity<Pegi> delete(@PathVariable("id") int id) {
		if (pbll.contains(id)) {
			Pegi p = pbll.selectById(id);
			pbll.deleteById(id);
			return new ResponseEntity<Pegi>(p, HttpStatus.OK);
		} else {
			return new ResponseEntity<Pegi>(HttpStatus.CONFLICT);
		}
	}

}

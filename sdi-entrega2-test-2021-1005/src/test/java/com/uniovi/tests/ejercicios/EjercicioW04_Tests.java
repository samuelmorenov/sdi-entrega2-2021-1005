package com.uniovi.tests.ejercicios;

import static org.junit.Assert.assertTrue;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class EjercicioW04_Tests extends BaseTests {

	/**
	 * Mostrar el listado de usuarios y comprobar que se muestran todos los que
	 * existen en el sistema.
	 */
	@Test
	public void Prueba_11() {
		assertTrue(false);
//		PO_LoginView.loginAdmin();
//		PO_NavView.accederPagina("user-list", "/user/list");
//		for (int i = 0; i < UserList.maxUser; i++) {
//			PO_View.checkElement("text", UserList.usuarios(i).email);
//			PO_View.checkElement("text", UserList.usuarios(i).name);
//			PO_View.checkElement("text", UserList.usuarios(i).lastName);
//		}
	}

}
package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentResource {
	@CrossOrigin
	@RequestMapping("students")
	public List <Student> getStudents()
	{
		List <Student> students = new ArrayList<>();
		
		Student s1 = new Student();
		s1.setName("rajiv");
		Marks m1 = new Marks();
		m1.setEnglish("18");
		m1.setMaths("21");
		m1.setScience("45");
		s1.setMarks(m1);
		s1.setRollNumber("KV2017-5A1");
		
		Student s2 = new Student();
		s2.setName("abhishek");
		Marks m2 = new Marks();
		m2.setEnglish("43");
		m2.setMaths("30");
		m2.setScience("37");
		s2.setMarks(m2);
		s2.setRollNumber("KV2017-5A2");
		
		Student s3 = new Student();
		s3.setName("zoya");
		Marks m3 = new Marks();
		m3.setEnglish("42");
		m3.setMaths("31");
		m3.setScience("50");
		s3.setMarks(m3);
		s3.setRollNumber("KV2017-5A3");
		
		Student s4 = new Student();
		s4.setName("Praveen");
		Marks m4 = new Marks();
		m4.setEnglish("72");
		m4.setMaths("81");
		m4.setScience("70");
		s4.setMarks(m4);
		s4.setRollNumber("KV2017-5A4");
		
		Student s5 = new Student();
		s5.setName("Kumar");
		Marks m5 = new Marks();
		m5.setEnglish("58");
		m5.setMaths("61");
		m5.setScience("65");
		s5.setMarks(m5);
		s5.setRollNumber("KV2017-5A5");
		
		Student s6 = new Student();
		s6.setName("Priyanka");
		Marks m6 = new Marks();
		m6.setEnglish("63");
		m6.setMaths("50");
		m6.setScience("57");
		s6.setMarks(m6);
		s6.setRollNumber("KV2017-5A6");
		
		Student s7 = new Student();
		s7.setName("alia");
		Marks m7 = new Marks();
		m7.setEnglish("52");
		m7.setMaths("51");
		m7.setScience("60");
		s7.setMarks(m7);
		s7.setRollNumber("KV2017-5A7");
		
		Student s8 = new Student();
		s8.setName("sharukh");
		Marks m8 = new Marks();
		m8.setEnglish("42");
		m8.setMaths("31");
		m8.setScience("80");
		s8.setMarks(m8);
		s8.setRollNumber("KV2017-5A8");
		
		students.add(s1);
		students.add(s2);
		students.add(s3);
		students.add(s4);
		students.add(s5);
		students.add(s6);
		students.add(s7);
		students.add(s8);

		return students;
	}

}

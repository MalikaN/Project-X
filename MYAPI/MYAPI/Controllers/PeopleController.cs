using MYAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MYAPI.Controllers
{
    public class PeopleController : ApiController
    {
        List<Person> people = new List<Person>();
        // GET: api/People

        public PeopleController()
        {
            people.Add(new Person { FirstName = "tharaka", LastName = "abeyratne", id = 1 });
            people.Add(new Person { FirstName = "Malika", LastName = "Nallapruma", id = 2 });
            people.Add(new Person { FirstName = "world", LastName = "hello", id = 3 });
        }
        public List<Person> Get()
        {
            return people;
        }
        // GET: api/People/5
        public Person Get(int id)
        {
            return people.Where(x => x.id == id).FirstOrDefault();
        }

        // POST: api/People
        public void Post(Person val)
        {
            people.Add(val);
        }

        // PUT: api/People/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/People/5
        public void Delete(int id)
        {
        }
    }
}

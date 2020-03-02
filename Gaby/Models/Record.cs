using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Gaby.Models
{
    public class Record
    {
        public int Id { get; set; }
        public string FileNumber { get; set; }
        public DateTime DateOfApplication { get; set; }
        public DateTime DateOfVisit { get; set; }
        public DateTime DateHelped { get; set; }
        public DateTime DiagnosisDate { get; set; }
        public DateTime DateOfRelapse { get; set; }
        public DateTime HeavenDate { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string LocationOfVisit { get; set; }
        public string SocialWorker { get; set; }
        public int LengthOfTreatment { get; set; }
        public int ChildId { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public int PhoneNumber { get; set; }
        public int CellPhone { get; set; }
        public string Email { get; set; }
        public string CancerType { get; set; }
        public Collection<Note> Notes { get; set; }
        public Collection<Person> People { get; set; }
        public bool Relapse { get; set; }

    }
}

using System.Collections.Generic;
using System.Threading.Tasks;
using Gaby.Models;

namespace Gaby.Data
{
    public interface IRecordRepository
    {
         Task<Record> Add(Record record);
         Task<Record> Delete(Record record);
         Task<bool> AddAll(IEnumerable<Record> records);
         Task<Record> Modify(Record record);
         Task<Record> GetRecordById(int recordId);
         Task<ICollection<Record>> GetAllRecords();
         Task<bool> RecordExists(string fileNumber);
         Task<Note> AddNote(Note note);
         Task<IEnumerable<Note>> AddNotes(IEnumerable<Note> notes);
         Task<Person> AddPerson(Person person);
         Task<IEnumerable<Person>> AddPeople(IEnumerable<Person> people);
    }
}
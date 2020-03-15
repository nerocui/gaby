using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gaby.Models;
using Microsoft.EntityFrameworkCore;

namespace Gaby.Data
{
    public class RecordRepository : IRecordRepository
    {
        private readonly DataContext _context;
        public RecordRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Record> Add(Record record)
        {
            await _context.Records.AddAsync(record);
            await _context.SaveChangesAsync();
            // var notesFromRecord = record.Notes;
            // var peopleFromRecord = record.People;
            // record.Notes = null;
            // record.People = null;
            // foreach (var note in notesFromRecord)
            // {
            //     note.RecordId = record.Id;
            // }
            // foreach (var person in peopleFromRecord)
            // {
            //     person.RecordId = record.Id;
            // }
            // await _context.Notes.AddRangeAsync(notesFromRecord);
            // await _context.People.AddRangeAsync(peopleFromRecord);
            // await _context.SaveChangesAsync();
            return await _context.Records
                .Include(r => r.Notes)
                .Include(r => r.People)
                .FirstOrDefaultAsync(r => r.FileNumber == record.FileNumber);
        }

        public async Task<bool> AddAll(IEnumerable<Record> records)
        {
            try {
                await _context.Records.AddRangeAsync(records);
                await _context.SaveChangesAsync();
                return true;
            } catch (Exception)
            {
                return false;
            }

        }

        public Task<Note> AddNote(Note note)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Note>> AddNotes(IEnumerable<Note> notes)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Person>> AddPeople(IEnumerable<Person> people)
        {
            throw new NotImplementedException();
        }

        public Task<Person> AddPerson(Person person)
        {
            throw new NotImplementedException();
        }

        public Task<Record> Delete(Record record)
        {
            throw new System.NotImplementedException();
        }

        public async Task<ICollection<Record>> GetAllRecords()
        {
            return await _context.Records
                .Include(r => r.Notes)
                .Include(r => r.People)
                .ToListAsync();
        }

        public async Task<Record> GetRecordById(int recordId)
        {
            return await _context.Records
                .Include(r => r.Notes)
                .Include(r => r.People)
                .FirstOrDefaultAsync(x => x.Id == recordId);
        }

        public Task<Record> Modify(Record record)
        {
            throw new System.NotImplementedException();
        }

        public async Task<bool> RecordExists(string fileNumber)
        {
            return await _context.Records.FirstOrDefaultAsync(x => x.FileNumber == fileNumber) != null;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Gaby.Data;
using Gaby.Models;
using Microsoft.AspNetCore.Mvc;

namespace Gaby.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordController : ControllerBase
    {
        private readonly IRecordRepository _repo;
        private readonly IRoleRepository _roleRepo;
        public RecordController(IRecordRepository repo, IRoleRepository roleRepo)
        {
            _roleRepo = roleRepo;
            _repo = repo;
        }
        [HttpPost("add")]
        public async Task<IActionResult> Add(Record record)
        {
            if (await _repo.RecordExists(record.FileNumber))
            {
                return BadRequest("Record already exists.");
            }
            return Ok(await _repo.Add(record));
        }
        [HttpPost("addall")]
        public async Task<IActionResult> AddAll(IEnumerable<Record> records)
        {
            Console.WriteLine("got here");
            foreach (var record in records)
            {
                if (await _repo.RecordExists(record.FileNumber))
                {
                    return BadRequest("One of the file already exists");
                }
            }
            if (await _repo.AddAll(records))
            {
                var allRecords = await _repo.GetAllRecords();
                return Ok(allRecords);
            }
            else
            {
                return BadRequest("Failed to add records.");
            }
        }
        [HttpGet("getall")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _repo.GetAllRecords());
        }
        [HttpGet("getallroles")]
        public async Task<IActionResult> GetAllRole()
        {
            return Ok(await _roleRepo.GetAll());
        }
    }
}
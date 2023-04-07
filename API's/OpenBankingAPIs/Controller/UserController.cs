using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OpenBankingAPIs.Models;
using RestSharp;

namespace OpenBankingAPIs.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        [Route("/GetToken")]
        public async Task<string> GetToken(string loginName)
        {
           
            var client = new RestClient("https://sandbox.api.yodlee.com/ysl");
            var request = new RestRequest("/auth/token");
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            request.AddHeader("loginName", loginName);
            request.AddParameter("clientId", "CSzJwnDcp10iloBT1sm7L4TNbKyqCvpg");
            request.AddParameter("secret", "1hWyDOxwRixlWWey");
            request.AddHeader("Api-Version", "1.1");
            var response = await client.PostAsync(request);

            return response.Content;
        }


        //[HttpPost]
        //[Route("Register")]
        //public async Task<string> RegisterUser(CreateUser user)
        //{

        //    var client = new RestClient("https://sandbox.api.yodlee.com/ysl");
        //    var request = new RestRequest("/user/register");
        //    request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
        //    request.AddJsonBody(user);
        //    request.AddHeader("loginName", loginName);
        //    request.AddHeader("Api-Version", "1.1");
        //    var response = await client.PostAsync(request);

        //    return response.Content;
        //}

        [HttpPost]
        [Route("/GetAccountBalance")]
        public async Task<string> GetAccountBalance(string providerAccId, string Token)//string providerAccId)
        {

            var client = new RestClient("https://sandbox.api.yodlee.com/ysl");
       
            var request = new RestRequest("/verification/verifiedAccounts");
            request.AddHeader("Content-Type", "application/json");
            request.AddParameter("providerAccountId", providerAccId);
            //request.AddHeader("loginName", loginName);
            //request.AddParameter("clientId", "CSzJwnDcp10iloBT1sm7L4TNbKyqCvpg");
            //request.AddParameter("secret", "1hWyDOxwRixlWWey");
            //request.AddHeader("Authorization", "Bearer E9FQmndtRUuZLbFQEnFFAdeAZm1q");
            request.AddHeader("Authorization", "Bearer " + Token);
            request.AddHeader("Api-Version", "1.1");
            var response = await client.GetAsync(request);

            //var Balance = response.Content.verifiedAccount.currentBalance;


            return response.Content;//response.Content;
        }
    }
}



using System;
using System.IO; //dodane pozniej
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Antiforgery; //dodane pozniej
using Microsoft.Extensions.Configuration; //dodane pozniej
using Microsoft.AspNetCore.NodeServices; //dodane pozniej

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace skany
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
           services.AddMvc(); //dodane pozniej
          services.AddNodeServices(); //dodane pozniej
         }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            loggerFactory.AddDebug(); //dodane pozniej

          if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

           /* app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            }); */
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://search.alignwell.com/search-meili', {
        params: {
          pageIndex: 1,
          pageSize: 50,
          index: 'DevAlignwellCom_Organizations',
          attributesToRetrieve:
            'ItemId,BusinessEmail,Name,EinNo,CountryCode,PhoneNumber,Logo,CoverPhoto,ContactPersons.FirstName',
        },
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJUaW1lWm9uZSI6ImFzaWEvZGhha2EiLCJUaW1lWm9uZU9mZnNldCI6IjM2MCIsIml0c0FSaXNreVBhc3N3b3JkIjoiRmFsc2UiLCJpc1ZlcmlmaWVkIjoiVHJ1ZSIsImZpcnN0TmFtZSI6IkhlbGVuYSIsImxhc3ROYW1lIjoiRGV2aXNfX18iLCJjb3VudHJ5Q29kZSI6Im5vLWNvZGUiLCJzYWx1dGF0aW9uIjoiICIsInRlbmFudElkIjoiZjNmYTI5YjItODcxYi00NWFiLWJlMDctOWVkODQ0MjA1MGQ2IiwiZGF0YWJhc2VOYW1lIjoiZjNmYTI5YjItODcxYi00NWFiLWJlMDctOWVkODQ0MjA1MGQ2Iiwic3ViIjoiNmRhOWQ3ZjUtOGU1MC00ZTY5LTk2ZmQtZDNmMjc0YzA0ZTgyIiwic2l0ZUlkIjoiN2VjMzVlNWEtMDUxNS00ZWQxLWFkYWMtODk0Mjk5NzAyNjMxIiwib3JpZ2luIjoiZGV2LmFsaWdud2VsbC5jb20sbWljcm9zZXJ2aWNlcy5yZWRsaW1lc29sdXRpb25zLm1sLGxvY2FsaG9zdCxsZm4ucmVkbGltZXNvbHV0aW9ucy5tbCxhcHBzLmxpdmluZ2ZpdGRldi5jb20sYnMtbG9jYWwuY29tOjIzMDAsYnMtbG9jYWwuY29tIiwic2Vzc2lvbklkIjoiUlNNRi1mNjQ4NGI5MS02ZWI5LTQzNjItOTJjMy03Yzk2ZDU4NzY2ZDIiLCJ1c2VySWQiOiI2ZGE5ZDdmNS04ZTUwLTRlNjktOTZmZC1kM2YyNzRjMDRlODIiLCJkaXNwbGF5TmFtZSI6IkhlbGVuYSIsInNpdGVOYW1lIjoiUmVkbGltZVNvbHV0aW9ucyIsInVzZXJOYW1lIjoiaGVsZW5hZGF2aXNAeW9wbWFpbC5jb20iLCJlbWFpbCI6ImhlbGVuYWRhdmlzQHlvcG1haWwuY29tIiwicGhvbmVOdW1iZXIiOiIrODgwMDE2NzUwNDI4MTIiLCJkZXZpY2VNYWNJZCI6IiAiLCJsYW5ndWFnZSI6ImVuLVVTIiwidXNlckxvZ2dlZGluIjoiVHJ1ZSIsIm5hbWUiOiI2ZGE5ZDdmNS04ZTUwLTRlNjktOTZmZC1kM2YyNzRjMDRlODIiLCJ1c2VyQXV0b0V4cGlyZSI6IkZhbHNlIiwidXNlckV4cGlyZU9uIjoiMDEvMDEvMDAwMSAwMDowMDowMCIsInN5c3RlbU9uQm9hcmREYXRlIjoiMDgvMjMvMjAyMyAwMjo0ODowOSIsInRhZ3MiOlsiX2Q0NGQ0MWM1LWIwOTQtNDQ4Zi04ZDhiLTE4ZmQ3ZjZkM2QxNSIsIl9kNDRkNDFjNS1iMDk0LTQ0OGYtOGQ4Yi0xOGZkN2Y2ZDNkMTVfQ2xpZW50XzQxMjUyNDAwLTAzMmUtNDIwNC05NmQxLWMwZDQ5MGRiM2Q3NyJdLCJwcm9maWxlUGljVXJsIjoiYWJvdXQ6YmxhbmsiLCJyb2xlIjpbIm93bmVyX21hc3RlcmFkbWluIiwiYW5vbnltb3VzIiwiYXBwdXNlciJdLCJuYmYiOjE2OTg5MDcyNjgsImV4cCI6MTY5OTI2NzI2OCwiaXNzIjoiQ049UmVkbGltZSBTb2x1dGlvbnMgQXBwbGljYXRpb24gUGxhdGZvcm0iLCJhdWQiOiIqIn0.vxRfNelPjMM47d8PqIpfvDt-tfbNa_cFbHRRRWZiEaZ6pjE7_1LSxwC20hNS1MGOIr43A9j8Al0VEt5sfZFiy1v8J9_-IcHgxpE4uSDC5patVZdv5-HV1RrfHSz6YwV_hROlwMubQvWPlUKi8QC3yJ5_eei_B4nENriXy6hPfTVg7y5yqwKRunqY3SaiWBhS1jQrJEaHk_I0RPj3gicfAFhjxxIr-BBMxjUCinBJY0TOjF1CMx9J5I5RjOon2F9jpAkTkQ3jQDJPqVzv2pp7Y2B3H6Is2XIU6E9IAe7UikmihHg2G6TbsNywps9RbWfr07EZ4Dgtc0LsOMprwR5NsA',
        },
      })
      .subscribe({
        next: (value) => {
          console.log(value);
        },
      });
  }
  title = 'meili-client';
}

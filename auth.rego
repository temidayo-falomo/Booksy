package httpapi.authz
import input
default allow = false



allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.request_path = ["v1", "collection"]
  input.company = "Kaufman Scott LLC"
  input.request_method = "UPDATE"
  input.groupname = "VIEWER"
}


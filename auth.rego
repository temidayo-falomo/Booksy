package httpapi.authz
import input
default allow = false



allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.None = "v1/collection/naira"
  input.None = "Thornton Leon Traders"
  input.None = "UPDATE"
  input.None = "EDITOR_CITTA_PUBBLICA"
}


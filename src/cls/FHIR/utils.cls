Class FHIR.utils
{

/// Delete all resources from the FHIR Server
ClassMethod purge(pServiceName As %String = "/fhir/r4") As %Status
{
    Try {
        set sc = $$$OK
        set strategy = ##class(HS.FHIRServer.API.InteractionsStrategy).GetStrategyForEndpoint(pServiceName)
        set options("deleteDataOnly") = 1
        do strategy.Delete(.options)
    }
    Catch ex {
        set sc=ex.AsStatus()
    }
        
    return sc
}

/// Load resources in the FHIR Server
ClassMethod load(pInputDirectory As %String = "/data/fhir/", pServiceType As %String = "FHIRServer", pServiceName As %String = "/fhir/r4", pDisplayProgress As %Boolean = 1) As %Status
{
    Try {
        set sc = $$$OK
        set sc = ##class(HS.FHIRServer.Tools.DataLoader).SubmitResourceFiles(pInputDirectory, pServiceType, pServiceName, pDisplayProgress)
    }
    Catch ex {
        set tSC=ex.AsStatus()
    }
    return sc
}

}

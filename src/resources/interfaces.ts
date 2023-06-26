export interface Resources {
    resourceName?:       string;
    resourceImage?:      string;
    resourceCategories?: ResourceCategory[];
}

interface ResourceCategory {
    categoryName:      string;
    categoryResources: CategoryResource[];
}

export interface CategoryResource {
    resourceImage:    string;
    resourceName:     string;
    resourceDesc:     string;
    resourceBackLink: string;
}

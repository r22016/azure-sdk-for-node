/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the ApplyArtifactsRequest class.
 * @constructor
 * Request body for applying artifacts to a virtual machine.
 * @member {array} [artifacts] The list of artifacts to apply.
 * 
 */
export interface ApplyArtifactsRequest {
    artifacts?: ArtifactInstallProperties[];
}

/**
 * @class
 * Initializes a new instance of the ArtifactInstallProperties class.
 * @constructor
 * Properties of an artifact.
 * @member {string} [artifactId] The artifact's identifier.
 * 
 * @member {array} [parameters] The parameters of the artifact.
 * 
 */
export interface ArtifactInstallProperties {
    artifactId?: string;
    parameters?: ArtifactParameterProperties[];
}

/**
 * @class
 * Initializes a new instance of the ArtifactParameterProperties class.
 * @constructor
 * Properties of an artifact parameter.
 * @member {string} [name] The name of the artifact parameter.
 * 
 * @member {string} [value] The value of the artifact parameter.
 * 
 */
export interface ArtifactParameterProperties {
    name?: string;
    value?: string;
}

/**
 * @class
 * Initializes a new instance of the ArmTemplateInfo class.
 * @constructor
 * Information about a generated ARM template.
 * @member {object} [template] The template's contents.
 * 
 * @member {object} [parameters] The parameters of the ARM template.
 * 
 */
export interface ArmTemplateInfo {
    template?: any;
    parameters?: any;
}

/**
 * @class
 * Initializes a new instance of the Artifact class.
 * @constructor
 * An artifact.
 * @member {string} [title] The title of the artifact.
 * 
 * @member {string} [description] The description of the artifact.
 * 
 * @member {string} [filePath] The file path of the artifact.
 * 
 * @member {string} [icon] The icon of the artifact.
 * 
 * @member {string} [targetOsType] Gets or sets the type of the target os.
 * 
 * @member {object} [parameters] The parameters of the artifact.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface Artifact extends BaseResource {
    title?: string;
    description?: string;
    filePath?: string;
    icon?: string;
    targetOsType?: string;
    parameters?: any;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ArtifactDeploymentStatusProperties class.
 * @constructor
 * Properties of an artifact deployment.
 * @member {string} [deploymentStatus] The deployment status of the artifact.
 * 
 * @member {number} [artifactsApplied] The total count of the artifacts that
 * were successfully applied.
 * 
 * @member {number} [totalArtifacts] The total count of the artifacts that
 * were tentatively applied.
 * 
 */
export interface ArtifactDeploymentStatusProperties {
    deploymentStatus?: string;
    artifactsApplied?: number;
    totalArtifacts?: number;
}

/**
 * @class
 * Initializes a new instance of the ArtifactSource class.
 * @constructor
 * Properties of an artifact source.
 * @member {string} [displayName] The display name of the artifact source.
 * 
 * @member {string} [uri] The URI of the artifact source.
 * 
 * @member {string} [sourceType] The type of the artifact source. Possible
 * values include: 'VsoGit', 'GitHub'
 * 
 * @member {string} [folderPath] The folder path of the artifact source.
 * 
 * @member {string} [branchRef] The branch reference of the artifact source.
 * 
 * @member {string} [securityToken] The security token of the artifact source.
 * 
 * @member {string} [status] The status of the artifact source. Possible
 * values include: 'Enabled', 'Disabled'
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface ArtifactSource extends BaseResource {
    displayName?: string;
    uri?: string;
    sourceType?: string;
    folderPath?: string;
    branchRef?: string;
    securityToken?: string;
    status?: string;
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Cost class.
 * @constructor
 * A cost item.
 * @member {string} [currencyCode] The currency code of the cost.
 * 
 * @member {array} [costs] The per-day costs items of the cost.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface Cost extends BaseResource {
    currencyCode?: string;
    costs?: CostPerDayProperties[];
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CostPerDayProperties class.
 * @constructor
 * The per-day properties of a cost item.
 * @member {date} [date] The date of the cost item.
 * 
 * @member {number} [cost] The cost of the cost item.
 * 
 * @member {string} [costType] The type of the cost. Possible values include:
 * 'Unavailable', 'Reported', 'Projected'
 * 
 */
export interface CostPerDayProperties {
    date?: Date;
    cost?: number;
    costType?: string;
}

/**
 * @class
 * Initializes a new instance of the CostInsight class.
 * @constructor
 * @member {string} [currencyCode]
 * 
 * @member {array} [vmCosts]
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface CostInsight extends BaseResource {
    currencyCode?: string;
    vmCosts?: VMCostProperties[];
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the VMCostProperties class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {string} [resourceGroupName]
 * 
 * @member {number} [cost]
 * 
 */
export interface VMCostProperties {
    name?: string;
    resourceGroupName?: string;
    cost?: number;
}

/**
 * @class
 * Initializes a new instance of the CustomImage class.
 * @constructor
 * A custom image.
 * @member {object} [vm]
 * 
 * @member {string} [vm.sourceVmId] The source vm identifier.
 * 
 * @member {boolean} [vm.sysPrep] Indicates whether sysprep has been run on
 * the VHD.
 * 
 * @member {object} [vm.windowsOsInfo] The Windows OS information of the VM.
 * 
 * @member {string} [vm.windowsOsInfo.windowsOsState] The state of the Windows
 * OS. Possible values include: 'NonSysprepped', 'SysprepRequested',
 * 'SysprepApplied'
 * 
 * @member {object} [vm.linuxOsInfo] The Linux OS information of the VM.
 * 
 * @member {string} [vm.linuxOsInfo.linuxOsState] The state of the Linux OS.
 * Possible values include: 'NonDeprovisioned', 'DeprovisionRequested',
 * 'DeprovisionApplied'
 * 
 * @member {object} [vhd] The VHD from which the image is to be created.
 * 
 * @member {string} [vhd.imageName] The image name.
 * 
 * @member {boolean} [vhd.sysPrep] Indicates whether sysprep has been run on
 * the VHD.
 * 
 * @member {string} [description] The description of the custom image.
 * 
 * @member {string} [osType] The OS type of the custom image. Possible values
 * include: 'Windows', 'Linux', 'None'
 * 
 * @member {string} [author] The author of the custom image.
 * 
 * @member {date} [creationDate] The creation date of the custom image.
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface CustomImage extends BaseResource {
    vm?: CustomImagePropertiesFromVm;
    vhd?: CustomImagePropertiesCustom;
    description?: string;
    osType?: string;
    author?: string;
    creationDate?: Date;
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CustomImagePropertiesFromVm class.
 * @constructor
 * Properties for creating a custom image from a virtual machine.
 * @member {string} [sourceVmId] The source vm identifier.
 * 
 * @member {boolean} [sysPrep] Indicates whether sysprep has been run on the
 * VHD.
 * 
 * @member {object} [windowsOsInfo] The Windows OS information of the VM.
 * 
 * @member {string} [windowsOsInfo.windowsOsState] The state of the Windows
 * OS. Possible values include: 'NonSysprepped', 'SysprepRequested',
 * 'SysprepApplied'
 * 
 * @member {object} [linuxOsInfo] The Linux OS information of the VM.
 * 
 * @member {string} [linuxOsInfo.linuxOsState] The state of the Linux OS.
 * Possible values include: 'NonDeprovisioned', 'DeprovisionRequested',
 * 'DeprovisionApplied'
 * 
 */
export interface CustomImagePropertiesFromVm {
    sourceVmId?: string;
    sysPrep?: boolean;
    windowsOsInfo?: WindowsOsInfo;
    linuxOsInfo?: LinuxOsInfo;
}

/**
 * @class
 * Initializes a new instance of the WindowsOsInfo class.
 * @constructor
 * Information about a Windows OS.
 * @member {string} [windowsOsState] The state of the Windows OS. Possible
 * values include: 'NonSysprepped', 'SysprepRequested', 'SysprepApplied'
 * 
 */
export interface WindowsOsInfo {
    windowsOsState?: string;
}

/**
 * @class
 * Initializes a new instance of the LinuxOsInfo class.
 * @constructor
 * Information about a Linux OS.
 * @member {string} [linuxOsState] The state of the Linux OS. Possible values
 * include: 'NonDeprovisioned', 'DeprovisionRequested', 'DeprovisionApplied'
 * 
 */
export interface LinuxOsInfo {
    linuxOsState?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomImagePropertiesCustom class.
 * @constructor
 * Properties for creating a custom image from a VHD.
 * @member {string} [imageName] The image name.
 * 
 * @member {boolean} [sysPrep] Indicates whether sysprep has been run on the
 * VHD.
 * 
 */
export interface CustomImagePropertiesCustom {
    imageName?: string;
    sysPrep?: boolean;
}

/**
 * @class
 * Initializes a new instance of the DayDetails class.
 * @constructor
 * Properties of a daily schedule.
 * @member {string} [time]
 * 
 */
export interface DayDetails {
    time?: string;
}

/**
 * @class
 * Initializes a new instance of the EvaluatePoliciesProperties class.
 * @constructor
 * Properties for evaluating a policy set.
 * @member {string} [factName] The fact name.
 * 
 * @member {string} [factData] The fact data.
 * 
 * @member {string} [valueOffset] The value offset.
 * 
 */
export interface EvaluatePoliciesProperties {
    factName?: string;
    factData?: string;
    valueOffset?: string;
}

/**
 * @class
 * Initializes a new instance of the EvaluatePoliciesRequest class.
 * @constructor
 * Request body for evaluating a policy set.
 * @member {array} [policies] Policies to evaluate.
 * 
 */
export interface EvaluatePoliciesRequest {
    policies?: EvaluatePoliciesProperties[];
}

/**
 * @class
 * Initializes a new instance of the EvaluatePoliciesResponse class.
 * @constructor
 * Response body for evaluating a policy set.
 * @member {array} [results] Results of evaluating a policy set.
 * 
 */
export interface EvaluatePoliciesResponse {
    results?: PolicySetResult[];
}

/**
 * @class
 * Initializes a new instance of the PolicySetResult class.
 * @constructor
 * Result of a policy set evaluation.
 * @member {boolean} [hasError] A value indicating whether this policy set
 * evaluation has discovered violations.
 * 
 * @member {array} [policyViolations] The list of policy violations.
 * 
 */
export interface PolicySetResult {
    hasError?: boolean;
    policyViolations?: PolicyViolation[];
}

/**
 * @class
 * Initializes a new instance of the PolicyViolation class.
 * @constructor
 * Policy violation.
 * @member {string} [code] The code of the policy violation.
 * 
 * @member {string} [message] The message of the policy violation.
 * 
 */
export interface PolicyViolation {
    code?: string;
    message?: string;
}

/**
 * @class
 * Initializes a new instance of the Formula class.
 * @constructor
 * A formula.
 * @member {string} [description] The description of the formula.
 * 
 * @member {string} [author] The author of the formula.
 * 
 * @member {string} [osType] The OS type of the formula.
 * 
 * @member {date} [creationDate] The creation date of the formula.
 * 
 * @member {object} [formulaContent] The content of the formula.
 * 
 * @member {string} [formulaContent.notes] The notes of the virtual machine.
 * 
 * @member {string} [formulaContent.ownerObjectId] The object identifier of
 * the owner of the virtual machine.
 * 
 * @member {string} [formulaContent.createdByUserId] The object identifier of
 * the creator of the virtual machine.
 * 
 * @member {string} [formulaContent.createdByUser] The email address of
 * creator of the virtual machine.
 * 
 * @member {string} [formulaContent.computeId] The resource identifier
 * (Microsoft.Compute) of the virtual machine.
 * 
 * @member {string} [formulaContent.customImageId] The custom image identifier
 * of the virtual machine.
 * 
 * @member {string} [formulaContent.osType] The OS type of the virtual machine.
 * 
 * @member {string} [formulaContent.size] The size of the virtual machine.
 * 
 * @member {string} [formulaContent.userName] The user name of the virtual
 * machine.
 * 
 * @member {string} [formulaContent.password] The password of the virtual
 * machine administrator.
 * 
 * @member {string} [formulaContent.sshKey] The SSH key of the virtual machine
 * administrator.
 * 
 * @member {boolean} [formulaContent.isAuthenticationWithSshKey] A value
 * indicating whether this virtual machine uses an SSH key for authentication.
 * 
 * @member {string} [formulaContent.fqdn] The fully-qualified domain name of
 * the virtual machine.
 * 
 * @member {string} [formulaContent.labSubnetName] The lab subnet name of the
 * virtual machine.
 * 
 * @member {string} [formulaContent.labVirtualNetworkId] The lab virtual
 * network identifier of the virtual machine.
 * 
 * @member {boolean} [formulaContent.disallowPublicIpAddress] Indicates
 * whether the virtual machine is to be created without a public IP address.
 * 
 * @member {array} [formulaContent.artifacts] The artifacts to be installed on
 * the virtual machine.
 * 
 * @member {object} [formulaContent.artifactDeploymentStatus] The artifact
 * deployment status for the virtual machine.
 * 
 * @member {string} [formulaContent.artifactDeploymentStatus.deploymentStatus]
 * The deployment status of the artifact.
 * 
 * @member {number} [formulaContent.artifactDeploymentStatus.artifactsApplied]
 * The total count of the artifacts that were successfully applied.
 * 
 * @member {number} [formulaContent.artifactDeploymentStatus.totalArtifacts]
 * The total count of the artifacts that were tentatively applied.
 * 
 * @member {object} [formulaContent.galleryImageReference] The Microsoft Azure
 * Marketplace image reference of the virtual machine.
 * 
 * @member {string} [formulaContent.galleryImageReference.offer] The offer of
 * the gallery image.
 * 
 * @member {string} [formulaContent.galleryImageReference.publisher] The
 * publisher of the gallery image.
 * 
 * @member {string} [formulaContent.galleryImageReference.sku] The SKU of the
 * gallery image.
 * 
 * @member {string} [formulaContent.galleryImageReference.osType] The OS type
 * of the gallery image.
 * 
 * @member {string} [formulaContent.galleryImageReference.version] The version
 * of the gallery image.
 * 
 * @member {string} [formulaContent.provisioningState] The provisioning status
 * of the resource.
 * 
 * @member {string} [formulaContent.id] The identifier of the resource.
 * 
 * @member {string} [formulaContent.name] The name of the resource.
 * 
 * @member {string} [formulaContent.type] The type of the resource.
 * 
 * @member {string} [formulaContent.location] The location of the resource.
 * 
 * @member {object} [formulaContent.tags] The tags of the resource.
 * 
 * @member {object} [vm] Information about a VM from which a formula is to be
 * created.
 * 
 * @member {string} [vm.labVmId] The identifier of the VM from which a formula
 * is to be created.
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface Formula extends BaseResource {
    description?: string;
    author?: string;
    osType?: string;
    creationDate?: Date;
    formulaContent?: LabVirtualMachine;
    vm?: FormulaPropertiesFromVm;
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the LabVirtualMachine class.
 * @constructor
 * A virtual machine.
 * @member {string} [notes] The notes of the virtual machine.
 * 
 * @member {string} [ownerObjectId] The object identifier of the owner of the
 * virtual machine.
 * 
 * @member {string} [createdByUserId] The object identifier of the creator of
 * the virtual machine.
 * 
 * @member {string} [createdByUser] The email address of creator of the
 * virtual machine.
 * 
 * @member {string} [computeId] The resource identifier (Microsoft.Compute) of
 * the virtual machine.
 * 
 * @member {string} [customImageId] The custom image identifier of the virtual
 * machine.
 * 
 * @member {string} [osType] The OS type of the virtual machine.
 * 
 * @member {string} [size] The size of the virtual machine.
 * 
 * @member {string} [userName] The user name of the virtual machine.
 * 
 * @member {string} [password] The password of the virtual machine
 * administrator.
 * 
 * @member {string} [sshKey] The SSH key of the virtual machine administrator.
 * 
 * @member {boolean} [isAuthenticationWithSshKey] A value indicating whether
 * this virtual machine uses an SSH key for authentication.
 * 
 * @member {string} [fqdn] The fully-qualified domain name of the virtual
 * machine.
 * 
 * @member {string} [labSubnetName] The lab subnet name of the virtual machine.
 * 
 * @member {string} [labVirtualNetworkId] The lab virtual network identifier
 * of the virtual machine.
 * 
 * @member {boolean} [disallowPublicIpAddress] Indicates whether the virtual
 * machine is to be created without a public IP address.
 * 
 * @member {array} [artifacts] The artifacts to be installed on the virtual
 * machine.
 * 
 * @member {object} [artifactDeploymentStatus] The artifact deployment status
 * for the virtual machine.
 * 
 * @member {string} [artifactDeploymentStatus.deploymentStatus] The deployment
 * status of the artifact.
 * 
 * @member {number} [artifactDeploymentStatus.artifactsApplied] The total
 * count of the artifacts that were successfully applied.
 * 
 * @member {number} [artifactDeploymentStatus.totalArtifacts] The total count
 * of the artifacts that were tentatively applied.
 * 
 * @member {object} [galleryImageReference] The Microsoft Azure Marketplace
 * image reference of the virtual machine.
 * 
 * @member {string} [galleryImageReference.offer] The offer of the gallery
 * image.
 * 
 * @member {string} [galleryImageReference.publisher] The publisher of the
 * gallery image.
 * 
 * @member {string} [galleryImageReference.sku] The SKU of the gallery image.
 * 
 * @member {string} [galleryImageReference.osType] The OS type of the gallery
 * image.
 * 
 * @member {string} [galleryImageReference.version] The version of the gallery
 * image.
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface LabVirtualMachine extends BaseResource {
    notes?: string;
    ownerObjectId?: string;
    createdByUserId?: string;
    createdByUser?: string;
    computeId?: string;
    customImageId?: string;
    osType?: string;
    size?: string;
    userName?: string;
    password?: string;
    sshKey?: string;
    isAuthenticationWithSshKey?: boolean;
    fqdn?: string;
    labSubnetName?: string;
    labVirtualNetworkId?: string;
    disallowPublicIpAddress?: boolean;
    artifacts?: ArtifactInstallProperties[];
    artifactDeploymentStatus?: ArtifactDeploymentStatusProperties;
    galleryImageReference?: GalleryImageReference;
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the GalleryImageReference class.
 * @constructor
 * The reference information for an Azure Marketplace image.
 * @member {string} [offer] The offer of the gallery image.
 * 
 * @member {string} [publisher] The publisher of the gallery image.
 * 
 * @member {string} [sku] The SKU of the gallery image.
 * 
 * @member {string} [osType] The OS type of the gallery image.
 * 
 * @member {string} [version] The version of the gallery image.
 * 
 */
export interface GalleryImageReference {
    offer?: string;
    publisher?: string;
    sku?: string;
    osType?: string;
    version?: string;
}

/**
 * @class
 * Initializes a new instance of the FormulaPropertiesFromVm class.
 * @constructor
 * Information about a VM from which a formula is to be created.
 * @member {string} [labVmId] The identifier of the VM from which a formula is
 * to be created.
 * 
 */
export interface FormulaPropertiesFromVm {
    labVmId?: string;
}

/**
 * @class
 * Initializes a new instance of the GalleryImage class.
 * @constructor
 * A gallery image.
 * @member {string} [author] The author of the gallery image.
 * 
 * @member {date} [createdDate] The creation date of the gallery image.
 * 
 * @member {string} [description] The description of the gallery image.
 * 
 * @member {object} [imageReference] The image reference of the gallery image.
 * 
 * @member {string} [imageReference.offer] The offer of the gallery image.
 * 
 * @member {string} [imageReference.publisher] The publisher of the gallery
 * image.
 * 
 * @member {string} [imageReference.sku] The SKU of the gallery image.
 * 
 * @member {string} [imageReference.osType] The OS type of the gallery image.
 * 
 * @member {string} [imageReference.version] The version of the gallery image.
 * 
 * @member {string} [icon] The icon of the gallery image.
 * 
 * @member {boolean} [enabled] Indicates whether this gallery image is enabled.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface GalleryImage extends BaseResource {
    author?: string;
    createdDate?: Date;
    description?: string;
    imageReference?: GalleryImageReference;
    icon?: string;
    enabled?: boolean;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the GenerateArmTemplateRequest class.
 * @constructor
 * Parameters for generating an ARM template for deploying artifacts.
 * @member {string} [virtualMachineName] The resource name of the virtual
 * machine.
 * 
 * @member {array} [parameters] The parameters of the ARM template.
 * 
 * @member {string} [location] The location of the virtual machine.
 * 
 */
export interface GenerateArmTemplateRequest {
    virtualMachineName?: string;
    parameters?: ParameterInfo[];
    location?: string;
}

/**
 * @class
 * Initializes a new instance of the ParameterInfo class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {string} [value]
 * 
 */
export interface ParameterInfo {
    name?: string;
    value?: string;
}

/**
 * @class
 * Initializes a new instance of the GenerateUploadUriParameter class.
 * @constructor
 * Properties for generating an upload URI.
 * @member {string} [blobName] The blob name of the upload URI.
 * 
 */
export interface GenerateUploadUriParameter {
    blobName?: string;
}

/**
 * @class
 * Initializes a new instance of the GenerateUploadUriResponse class.
 * @constructor
 * Reponse body for generating an upload URI.
 * @member {string} [uploadUri] The upload URI for the VHD.
 * 
 */
export interface GenerateUploadUriResponse {
    uploadUri?: string;
}

/**
 * @class
 * Initializes a new instance of the HourDetails class.
 * @constructor
 * Properties of an hourly schedule.
 * @member {number} [minute] Minutes of the hour the schedule will run.
 * 
 */
export interface HourDetails {
    minute?: number;
}

/**
 * @class
 * Initializes a new instance of the Lab class.
 * @constructor
 * A lab.
 * @member {string} [defaultStorageAccount] The lab's default storage account.
 * 
 * @member {string} [artifactsStorageAccount] The artifact storage account of
 * the lab.
 * 
 * @member {array} [storageAccounts] The storage accounts of the lab.
 * 
 * @member {string} [vaultName] The name of the key vault of the lab.
 * 
 * @member {string} [labStorageType] The type of the lab storage. Possible
 * values include: 'Standard', 'Premium'
 * 
 * @member {string} [defaultVirtualNetworkId] The default virtual network
 * identifier of the lab.
 * 
 * @member {date} [createdDate] The creation date of the lab.
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface Lab extends BaseResource {
    defaultStorageAccount?: string;
    artifactsStorageAccount?: string;
    storageAccounts?: string[];
    vaultName?: string;
    labStorageType?: string;
    defaultVirtualNetworkId?: string;
    createdDate?: Date;
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the LabVhd class.
 * @constructor
 * Properties of a VHD in the lab.
 * @member {string} [id] The absolute URI of the VHD.
 * 
 */
export interface LabVhd {
    id?: string;
}

/**
 * @class
 * Initializes a new instance of the Policy class.
 * @constructor
 * A Policy.
 * @member {string} [description] The description of the policy.
 * 
 * @member {string} [status] The status of the policy. Possible values
 * include: 'Enabled', 'Disabled'
 * 
 * @member {string} [factName] The fact name of the policy. Possible values
 * include: 'UserOwnedLabVmCount', 'LabVmCount', 'LabVmSize', 'GalleryImage',
 * 'UserOwnedLabVmCountInSubnet'
 * 
 * @member {string} [factData] The fact data of the policy.
 * 
 * @member {string} [threshold] The threshold of the policy.
 * 
 * @member {string} [evaluatorType] The evaluator type of the policy. Possible
 * values include: 'AllowedValuesPolicy', 'MaxValuePolicy'
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface Policy extends BaseResource {
    description?: string;
    status?: string;
    factName?: string;
    factData?: string;
    threshold?: string;
    evaluatorType?: string;
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Schedule class.
 * @constructor
 * A schedule.
 * @member {string} [status] The status of the schedule. Possible values
 * include: 'Enabled', 'Disabled'
 * 
 * @member {string} [taskType] The task type of the schedule. Possible values
 * include: 'LabVmsShutdownTask', 'LabVmsStartupTask', 'LabBillingTask'
 * 
 * @member {object} [weeklyRecurrence] The weekly recurrence of the schedule.
 * 
 * @member {array} [weeklyRecurrence.weekdays] The days of the week.
 * 
 * @member {string} [weeklyRecurrence.time] The time of the day.
 * 
 * @member {object} [dailyRecurrence] The daily recurrence of the schedule.
 * 
 * @member {string} [dailyRecurrence.time]
 * 
 * @member {object} [hourlyRecurrence] The hourly recurrence of the schedule.
 * 
 * @member {number} [hourlyRecurrence.minute] Minutes of the hour the schedule
 * will run.
 * 
 * @member {string} [timeZoneId] The time zone id.
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface Schedule extends BaseResource {
    status?: string;
    taskType?: string;
    weeklyRecurrence?: WeekDetails;
    dailyRecurrence?: DayDetails;
    hourlyRecurrence?: HourDetails;
    timeZoneId?: string;
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the WeekDetails class.
 * @constructor
 * Properties of a weekly schedule.
 * @member {array} [weekdays] The days of the week.
 * 
 * @member {string} [time] The time of the day.
 * 
 */
export interface WeekDetails {
    weekdays?: string[];
    time?: string;
}

/**
 * @class
 * Initializes a new instance of the VirtualNetwork class.
 * @constructor
 * A virtual network.
 * @member {array} [allowedSubnets] The allowed subnets of the virtual network.
 * 
 * @member {string} [description] The description of the virtual network.
 * 
 * @member {string} [externalProviderResourceId] The Microsoft.Network
 * resource identifier of the virtual network.
 * 
 * @member {array} [subnetOverrides] The subnet overrides of the virtual
 * network.
 * 
 * @member {string} [provisioningState] The provisioning status of the
 * resource.
 * 
 * @member {string} [id] The identifier of the resource.
 * 
 * @member {string} [name] The name of the resource.
 * 
 * @member {string} [type] The type of the resource.
 * 
 * @member {string} [location] The location of the resource.
 * 
 * @member {object} [tags] The tags of the resource.
 * 
 */
export interface VirtualNetwork extends BaseResource {
    allowedSubnets?: Subnet[];
    description?: string;
    externalProviderResourceId?: string;
    subnetOverrides?: SubnetOverride[];
    provisioningState?: string;
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Subnet class.
 * @constructor
 * @member {string} [resourceId]
 * 
 * @member {string} [labSubnetName]
 * 
 * @member {string} [allowPublicIp] Possible values include: 'Default',
 * 'Deny', 'Allow'
 * 
 */
export interface Subnet {
    resourceId?: string;
    labSubnetName?: string;
    allowPublicIp?: string;
}

/**
 * @class
 * Initializes a new instance of the SubnetOverride class.
 * @constructor
 * Property overrides on a subnet of a virtual network.
 * @member {string} [resourceId] The resource identifier of the subnet.
 * 
 * @member {string} [labSubnetName] The name given to the subnet within the
 * lab.
 * 
 * @member {string} [useInVmCreationPermission] Indicates whether this subnet
 * can be used during virtual machine creation. Possible values include:
 * 'Default', 'Deny', 'Allow'
 * 
 * @member {string} [usePublicIpAddressPermission] Indicates whether public IP
 * addresses can be assigned to virtual machines on this subnet. Possible
 * values include: 'Default', 'Deny', 'Allow'
 * 
 */
export interface SubnetOverride {
    resourceId?: string;
    labSubnetName?: string;
    useInVmCreationPermission?: string;
    usePublicIpAddressPermission?: string;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionNotification class.
 * @constructor
 * @member {string} [registrationDate]
 * 
 * @member {string} [state] Possible values include: 'NotDefined',
 * 'Registered', 'Unregistered', 'Warned', 'Suspended', 'Deleted'
 * 
 * @member {object} [properties]
 * 
 * @member {string} [properties.tenantId]
 * 
 */
export interface SubscriptionNotification {
    registrationDate?: string;
    state?: string;
    properties?: SubscriptionNotificationProperties;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionNotificationProperties class.
 * @constructor
 * @member {string} [tenantId]
 * 
 */
export interface SubscriptionNotificationProperties {
    tenantId?: string;
}

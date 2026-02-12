
const normalizeFieldName = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
};

const fieldNameMappings = {
    // Expectations
    "Expected Caste": 'expectedCaste',
    "Preferred City": 'preferredCity',
    "Expected Age Difference": 'expectedAgeDifference',
    "Expected Education": 'expectedEducation',
    "Accept Divorcee": 'divorcee',
    "Expected Height": 'expectedHeight',
    "Expected Income": 'expectedIncome',
    "Expected Working Status": 'expectedWorkingStatus',
    "Expected Sub Caste": 'expectedSubCaste'
};

const formData = {
    // Simulating what the form would have based on raw data names
    "expectedCaste": "TestCaste",
    "expectedHeight": "5'5\" - 6'0\"",
    "expectedEducation": "Master's",
    "preferredCity": "Mumbai",
    "expectedAgeDifference": "1-3 Years",
    "expectedIncome": "12-18 Lakhs",
    "divorcee": "No"
};

const transformFormDataForBackend = (formData) => {
    const transformed = {};

    // First pass - map all fields that have direct mappings
    Object.keys(formData).forEach(formField => {
        // Find if this form field has a mapping
        const mappingEntry = Object.entries(fieldNameMappings).find(
            ([key]) => normalizeFieldName(key) === normalizeFieldName(formField)
        );

        if (mappingEntry) {
            const [_, backendField] = mappingEntry;
            // Handle different value types appropriately
            if (Array.isArray(formData[formField])) {
                transformed[backendField] = formData[formField].filter(item => item.trim() !== '');
            } else if (typeof formData[formField] === 'boolean') {
                transformed[backendField] = formData[formField];
            } else {
                transformed[backendField] = formData[formField] || null;
            }
            console.log(`Mapped '${formField}' -> '${backendField}': ${transformed[backendField]}`);
        } else {
            // If no mapping exists, include the field as-is
            transformed[formField] = formData[formField];
            console.log(`No mapping for '${formField}', kept as-is`);
        }
    });

    return transformed;
};

console.log("Testing transformation...");
const result = transformFormDataForBackend(formData);
console.log("\nResult:", JSON.stringify(result, null, 2));

// verification
const expectedKeys = ['expectedCaste', 'expectedHeight', 'expectedEducation', 'preferredCity', 'expectedAgeDifference', 'expectedIncome', 'divorcee'];
const missing = expectedKeys.filter(k => !result[k]);
if (missing.length > 0) {
    console.error("FAIL: Missing keys:", missing);
} else {
    console.log("SUCCESS: All keys present.");
}

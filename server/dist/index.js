"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sendMessageRouter_1 = __importDefault(require("./routers/sendMessageRouter"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// ✅ Enable CORS for frontend access (adjust origin as needed)
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'https://zohebhasan.com'],
    methods: ['POST', 'GET'],
    credentials: false,
}));
// ✅ Parse JSON request bodies
app.use(express_1.default.json());
// ✅ Routes
app.use('/sendMessage', sendMessageRouter_1.default);
// ✅ Test route
app.get('/', (_req, res) => {
    res.send('Hello from TypeScript + Express!');
});
// ✅ Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
